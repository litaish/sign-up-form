# sign-up-form
A sign up form built using HTML and CSS

Form fields include client-side validating:
-Setting fields as (required). This feature is made accessible for screen
readers using `abbr` tag
-Including pattern validation and feedback for each field
-Including password checking for fields (Password) and
(Confirm Password), which means, JavaScript checks if (Confirm Password) field
is the same as (Password) field. If the condition is not met, a custom error
message is displaying via `span` tag and `aria-live` attribute. This error 
message is made accessible to screen readers.
Error message gets displayed in `span` tag accordingly. If an error message
is present, the `span` tag has `.active` class added, which makes the `span` visible.

Basic responsivity has been implemented.
