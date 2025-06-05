
let urls = ["dets.json", "nejacData.json", "NejacPDF.json"]
const requests = urls.map(u => fetch(u));
let jsons = []
Promise.all(requests).then(responses => {
    const results = responses.map(u => u.json());

    Promise.all(results).then(all =>
        init(all)

    )






})





    .catch(function (err) {
        console.log(err);
    })

function init(all) {

    let [dets, data, pdf] = [...all]

    data.forEach((i, ii) => {
        let tr = document.createElement("tr")

       let  [detail, date, rec, report] = [...i]

        tr.append(Object.assign(document.createElement("a"), { id: ii, innerHTML: "detail", className: "details", href: "#" })



        )
        let line = [date, rec]
        line.forEach(j => tr.append(Object.assign(document.createElement("td"), { innerHTML: j })))
        document.body.append(tr)

    })

Array.from(document.getElementsByClassName("details")).forEach(det=>det.addEventListener("mouseover", (e)=>showDets(e,dets)))


}


function showDets(e,dets){

 document.getElementById("detailView").innerHTML=dets[e.currentTarget.id]

}