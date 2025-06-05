# NEJAC Recommendations Search Engine

This project is a local, browser-based remake of the formerly available "Individual NEJAC Recommendations Search Engine" from the U.S. Environmental Protection Agency (EPA) website. It allows users to easily search, view, and access full reports of recommendations made by the National Environmental Justice Advisory Council (NEJAC).

## Features

*   **Keyword Search:** Quickly filter recommendations by typing keywords into the search bar. The search spans across dates, recommendation summaries, and report titles.
*   **Interactive Table View:** Displays a clear, sortable list of NEJAC recommendations, including:
    *   Date of the recommendation.
    *   A concise summary of the recommendation.
    *   A link to the full report title.
*   **Detailed Information Panel:**
    *   Hover over the "details" link in any row to see an expanded panel with more specific information about that recommendation.
    *   Click the "details" link to lock the panel open for easier reading.
*   **Direct PDF Access:**
    *   Click on a report title in the "Full Report" column of the main table to open the associated PDF document.
    *   Links within the detailed information panel also allow direct access to the relevant PDF reports.

## Data Sources

The search engine relies on three local JSON files for its data:

*   `nejacData.json`: Contains the primary structured data for populating the main table (e.g., ID, date, recommendation summary, report ID, report title).
*   `dets.json`: An array of HTML strings, where each string represents the detailed content (originally a `<tbody>`) for a specific recommendation. This content is displayed in the pop-up detail panel.
*   `NejacPDF.json`: A mapping between report node IDs and their corresponding PDF filenames. This enables the direct links to the full PDF reports stored in the `/node/` directory.

All PDF documents are expected to be located within a `node` subdirectory relative to the `index.html` file.

## How to Use

1.  **Clone or Download:** Get all project files, including `index.html`, the `.json` data files, and the `node` directory (containing the PDF reports).
2.  **Directory Structure:** Ensure that `index.html`, `dets.json`, `nejacData.json`, `NejacPDF.json`, and the `node` folder are all in the same root directory.
3.  **Open in Browser:** Open the `index.html` file in any modern web browser (e.g., Chrome, Firefox, Safari, Edge).
4.  **Search & Explore:**
    *   Use the search bar at the top to filter the recommendations.
    *   Hover over or click "details" in the first column of the table to view more information.
    *   Click on a report title in the "Full Report" column (or links within the details panel) to open the PDF.

## Technology Stack

*   HTML
*   CSS
*   Vanilla JavaScript

## Project Purpose
 
This tool was created to provide continued access to the valuable NEJAC recommendations after the original EPA search engine was deprecated. It aims to replicate the core functionality of browsing and searching these important documents for researchers, community members, and policymakers.

## Future Considerations

*   Implement more advanced sorting options for the table (e.g., by date, title).
*   Enhance search functionality (e.g., search by specific fields, date range selectors).
*   Improve UI/UX for better accessibility and visual appeal.
*   Consider a more robust data management solution if the dataset is expected to grow or change frequently.gi