import { Injectable } from '@angular/core';

export interface BootstrapClass {
  name: string;
  description: string;
  htmlExample: string;
}

export interface ClassCategory {
  name: string;
  description: string;
  items: BootstrapClass[];
}

@Injectable({
  providedIn: 'root'
})
export class BootstrapClassesService {

  private classes: ClassCategory[] = [
    {
      name: 'Buttons',
      description: 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more.',
      items: [
        { name: '.btn .btn-primary', description: 'Primary action button.', htmlExample: `<button type="button" class="btn btn-primary">Primary</button>` },
        { name: '.btn .btn-secondary', description: 'Secondary action button.', htmlExample: `<button type="button" class="btn btn-secondary">Secondary</button>` },
        { name: '.btn .btn-success', description: 'Indicates a successful or positive action.', htmlExample: `<button type="button" class="btn btn-success">Success</button>` },
        { name: '.btn .btn-danger', description: 'Indicates a dangerous or potentially negative action.', htmlExample: `<button type="button" class="btn btn-danger">Danger</button>` },
        { name: '.btn .btn-warning', description: 'Indicates a warning that might need attention.', htmlExample: `<button type="button" class="btn btn-warning">Warning</button>` },
        { name: '.btn .btn-info', description: 'Represents an informational alert.', htmlExample: `<button type="button" class="btn btn-info">Info</button>` },
        { name: '.btn .btn-light', description: 'A light-colored button.', htmlExample: `<button type="button" class="btn btn-light">Light</button>` },
        { name: '.btn .btn-dark', description: 'A dark-colored button.', htmlExample: `<button type="button" class="btn btn-dark">Dark</button>` },
        { name: '.btn .btn-link', description: 'Makes a button look like a link.', htmlExample: `<button type="button" class="btn btn-link">Link</button>` },
        { name: '.btn .btn-outline-primary', description: 'Outlined primary action button.', htmlExample: `<button type="button" class="btn btn-outline-primary">Primary</button>` },
        { name: '.btn .btn-outline-secondary', description: 'Outlined secondary action button.', htmlExample: `<button type="button" class="btn btn-outline-secondary">Secondary</button>` },
        { name: '.btn .btn-lg', description: 'Large button.', htmlExample: `<button type="button" class="btn btn-primary btn-lg">Large button</button>` },
        { name: '.btn .btn-sm', description: 'Small button.', htmlExample: `<button type="button" class="btn btn-secondary btn-sm">Small button</button>` },
        { name: '.btn .disabled', description: 'Disabled button state.', htmlExample: `<button type="button" class="btn btn-primary" disabled>Disabled</button>` },
      ]
    },
    {
      name: 'Alerts',
      description: 'Provide contextual feedback messages for typical user actions with a handful of available and flexible alert messages.',
      items: [
        { name: '.alert .alert-primary', description: 'A primary-colored alert.', htmlExample: `<div class="alert alert-primary" role="alert">A simple primary alert.</div>` },
        { name: '.alert .alert-success', description: 'A success-colored alert.', htmlExample: `<div class="alert alert-success" role="alert">A simple success alert.</div>` },
        { name: '.alert .alert-danger', description: 'A danger-colored alert with an example link.', htmlExample: `<div class="alert alert-danger" role="alert">A simple danger alert with <a href="#" class="alert-link">an example link</a>.</div>` },
        { name: '.alert .alert-warning', description: 'A warning-colored alert.', htmlExample: `<div class="alert alert-warning" role="alert">A simple warning alert.</div>` },
        { name: '.alert .alert-info', description: 'An info-colored alert.', htmlExample: `<div class="alert alert-info" role="alert">A simple info alert.</div>` },
        { name: '.alert-light', description: 'A light-colored alert.', htmlExample: `<div class="alert alert-light" role="alert">A simple light alert.</div>` },
        { name: '.alert-dark', description: 'A dark-colored alert.', htmlExample: `<div class="alert alert-dark" role="alert">A simple dark alert.</div>` },
        { name: '.alert-dismissible', description: 'An alert that can be dismissed.', htmlExample: `<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>Holy guacamole!</strong> You should check in on some of those fields below.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>` },
      ]
    },
    {
      name: 'Badges',
      description: 'Documentation and examples for badges, our small count and labeling component.',
      items: [
        { name: '.badge .bg-primary', description: 'Primary badge, often used for counts.', htmlExample: `<h3>Example <span class="badge bg-primary">New</span></h3>` },
        { name: '.badge .bg-secondary', description: 'Secondary badge, can be used on buttons.', htmlExample: `<button type="button" class="btn btn-primary">Notifications <span class="badge text-bg-secondary">4</span></button>` },
        { name: '.badge .bg-success', description: 'Success badge.', htmlExample: `<span class="badge bg-success">Success</span>` },
        { name: '.badge .bg-danger', description: 'Danger badge.', htmlExample: `<span class="badge bg-danger">Danger</span>` },
        { name: '.badge .bg-warning', description: 'Warning badge.', htmlExample: `<span class="badge text-dark bg-warning">Warning</span>` },
        { name: '.badge .bg-info', description: 'Info badge.', htmlExample: `<span class="badge text-dark bg-info">Info</span>` },
        { name: '.badge .rounded-pill', description: 'A rounded "pill" badge.', htmlExample: `<span class="badge rounded-pill bg-danger">Pill badge</span>` },
      ]
    },
    {
      name: 'Cards',
      description: 'A flexible and extensible content container.',
      items: [
        { name: '.card', description: 'Basic card structure.', htmlExample: `<div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title">Card title</h5><p class="card-text">Some quick example text to build on the card title.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div>` },
        { name: '.card with header/footer', description: 'Card with a header and footer.', htmlExample: `<div class="card text-center" style="width: 18rem;"><div class="card-header">Featured</div><div class="card-body"><h5 class="card-title">Special treatment</h5><p class="card-text">With supporting text below.</p></div><div class="card-footer text-muted">2 days ago</div></div>` },
        { name: 'Image card', description: 'Card with an image.', htmlExample: `<div class="card" style="width: 18rem;"><img src="https://picsum.photos/300/200" class="card-img-top" alt="..."><div class="card-body"><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p></div></div>` },
      ]
    },
     {
      name: 'Typography',
      description: 'Classes for controlling text alignment, wrapping, weight, and more.',
      items: [
        { name: '<h1> to <h6>', description: 'HTML headings, from h1 to h6.', htmlExample: `<div class="text-start"><h1>h1. Bootstrap heading</h1><h2>h2. Bootstrap heading</h2><h3>h3. Bootstrap heading</h3></div>`},
        { name: '.display-*', description: 'Display headings are larger and more opinionated.', htmlExample: `<h1 class="display-1">Display 1</h1>`},
        { name: '.lead', description: 'Make a paragraph stand out.', htmlExample: `<p class="lead">This is a lead paragraph.</p>`},
        { name: '.text-muted', description: 'Muted text for secondary information.', htmlExample: `<p class="text-muted">Muted text with a primary link <a href="#">link</a>.</p>`},
        { name: '.text-center', description: 'Center-aligned text.', htmlExample: `<p class="text-center">Center aligned text.</p>`},
        { name: '.text-end', description: 'End-aligned text.', htmlExample: `<p class="text-end">Right aligned text.</p>`},
        { name: '.text-decoration-underline', description: 'Underlined text.', htmlExample: `<p class="text-decoration-underline">This text has a line underneath it.</p>`},
        { name: '.fw-bold', description: 'Bold text.', htmlExample: `<p class="fw-bold">Bold text.</p>`},
        { name: '.fst-italic', description: 'Italic text.', htmlExample: `<p class="fst-italic">Italic text.</p>`},
      ]
    },
    {
      name: 'Grid System',
      description: 'Bootstrap’s powerful mobile-first flexbox grid.',
      items: [
        { name: '.container', description: 'A responsive fixed-width container.', htmlExample: `<div class="container bg-secondary text-white p-2">.container</div>`},
        { name: '.container-fluid', description: 'A full width container, spanning the entire viewport.', htmlExample: `<div class="container-fluid bg-secondary text-white p-2">.container-fluid</div>`},
        { name: '.row and .col', description: 'Basic grid layout with columns.', htmlExample: `<div class="container text-center"><div class="row"><div class="col border bg-light">Column</div><div class="col border bg-light">Column</div><div class="col border bg-light">Column</div></div></div>` },
        { name: '.col-6', description: 'A column spanning 6 of 12 grid columns.', htmlExample: `<div class="container text-center"><div class="row"><div class="col-6 border bg-light">.col-6</div><div class="col-6 border bg-light">.col-6</div></div></div>` },
      ]
    },
    {
      name: 'Tables',
      description: 'Examples for opting into table styles.',
      items: [
        { name: '.table', description: 'Basic table styling.', htmlExample: `<table class="table"><thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td></tr></tbody></table>`},
        { name: '.table-striped', description: 'Adds zebra-striping to table rows.', htmlExample: `<table class="table table-striped"><thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td></tr></tbody></table>`},
        { name: '.table-bordered', description: 'Adds borders to all sides of the table and cells.', htmlExample: `<table class="table table-bordered"><thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td></tr></tbody></table>`},
        { name: '.table-hover', description: 'Enables a hover state on table rows.', htmlExample: `<table class="table table-hover"><thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td></tr><tr><td>2</td><td>Jacob</td><td>Thornton</td></tr></tbody></table>`},
        { name: '.table-dark', description: 'Inverts the colors for a dark-themed table.', htmlExample: `<table class="table table-dark"><thead><tr><th>#</th><th>First</th><th>Last</th></tr></thead><tbody><tr><td>1</td><td>Mark</td><td>Otto</td></tr></tbody></table>`},
      ]
    },
    {
      name: 'Forms',
      description: 'Examples and usage guidelines for form controls.',
      items: [
        { name: '.form-control', description: 'Styles textual inputs and textareas.', htmlExample: `<input type="email" class="form-control" placeholder="name@example.com">` },
        { name: '.form-label', description: 'Styled labels for form controls.', htmlExample: `<div><label for="input1" class="form-label">Email address</label><input type="email" class="form-control" id="input1"></div>`},
        { name: '.form-select', description: 'Custom styled select menus.', htmlExample: `<select class="form-select"><option selected>Open this select menu</option><option value="1">One</option></select>`},
        { name: '.form-check', description: 'For checkboxes and radio buttons.', htmlExample: `<div class="form-check"><input class="form-check-input" type="checkbox" value=""><label class="form-check-label">Default checkbox</label></div>` },
        { name: '.form-switch', description: 'A toggle switch style for checkboxes.', htmlExample: `<div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch"><label class="form-check-label">Switch checkbox</label></div>`},
      ]
    },
    {
      name: 'Progress',
      description: 'Provide up-to-date feedback on the progress of a workflow or action with progress bars.',
      items: [
        { name: '.progress & .progress-bar', description: 'Basic progress bar.', htmlExample: `<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>` },
        { name: 'Labels', description: 'Add a label to your progress bar.', htmlExample: `<div class="progress" style="height: 20px;"><div class="progress-bar" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50%</div></div>` },
        { name: '.progress-bar-striped', description: 'Striped progress bar.', htmlExample: `<div class="progress" style="height: 20px;"><div class="progress-bar progress-bar-striped bg-success" role="progressbar" style="width: 75%" aria-valuenow="75"></div></div>` },
        { name: '.progress-bar-animated', description: 'Animated striped progress bar.', htmlExample: `<div class="progress" style="height: 20px;"><div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%"></div></div>` },
      ]
    },
    {
      name: 'Spinners',
      description: 'Indicate the loading state of a component or page.',
      items: [
        { name: '.spinner-border', description: 'A circular "border" spinner.', htmlExample: `<div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>` },
        { name: '.spinner-grow', description: 'A "growing" spinner.', htmlExample: `<div class="spinner-grow text-success" role="status"><span class="visually-hidden">Loading...</span></div>` },
        { name: 'Sizing', description: 'Use .spinner-border-sm for smaller spinners.', htmlExample: `<div class="spinner-border spinner-border-sm" role="status"></div>` },
        { name: 'Buttons', description: 'Use spinners within buttons.', htmlExample: `<button class="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm" aria-hidden="true"></span><span role="status"> Loading...</span></button>` },
      ]
    },
    {
      name: 'Spacing',
      description: 'Use shorthand responsive margin, padding, and gap utility classes.',
      items: [
        { name: 'm-* (margin)', description: 'Sets margin on all sides. (e.g., m-3)', htmlExample: `<div class="bg-primary m-3 p-2 text-white">.m-3</div>` },
        { name: 'p-* (padding)', description: 'Sets padding on all sides. (e.g., p-4)', htmlExample: `<div class="bg-success p-4"><div class="bg-light">.p-4</div></div>` },
        { name: 'mx-auto (center)', description: 'Centers a block element horizontally.', htmlExample: `<div style="width: 150px;" class="mx-auto bg-info p-2 text-white text-center">.mx-auto</div>` },
        { name: 'mt-*, ps-* (specific sides)', description: 'Set margin-top, padding-start, etc. (e.g., mt-2 ps-4)', htmlExample: `<div class="bg-warning mt-2 ps-4 text-dark">.mt-2 .ps-4</div>` },
      ]
    },
    {
      name: 'Borders',
      description: 'Use border utilities to add or remove an element’s borders.',
      items: [
        { name: '.border', description: 'Adds a border to all sides.', htmlExample: `<div class="border border-primary p-3">.border .border-primary</div>` },
        { name: '.border-0', description: 'Removes all borders.', htmlExample: `<div class="border-0 bg-light p-3">.border-0</div>` },
        { name: '.border-top-0', description: 'Removes the top border.', htmlExample: `<div class="border border-top-0 border-danger p-3">.border-top-0</div>` },
        { name: '.rounded', description: 'Adds a small border-radius.', htmlExample: `<div class="border rounded p-3">.rounded</div>` },
        { name: '.rounded-pill', description: 'Creates a pill shape.', htmlExample: `<div class="border rounded-pill p-3 text-center">.rounded-pill</div>` },
        { name: '.rounded-circle', description: 'Creates a circle.', htmlExample: `<div class="border rounded-circle bg-secondary d-inline-block" style="width: 100px; height: 100px;"></div>` },
      ]
    }
  ];

  getClasses(): ClassCategory[] {
    return this.classes;
  }
}
