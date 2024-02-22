import { addFillerText, resetFillerText } from "./filler-text";

// Add event listeners to the buttons in the left sidebar.
addFillerText("left-sidebar-p", "left-sidebar-add-filler-text");
resetFillerText("left-sidebar-p", "left-sidebar-reset-filler-text");

// Add event listeners to the buttons in the main content area.
addFillerText("filler-text", "btn-add-filler-text");
resetFillerText("filler-text", "btn-remove-filler-text");

// Add event listeners to the buttons in the right sidebar.
addFillerText("right-sidebar-p", "right-sidebar-add-filler-text");
resetFillerText("right-sidebar-p", "right-sidebar-remove-filler-text");
