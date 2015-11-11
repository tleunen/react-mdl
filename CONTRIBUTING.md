# Contributing to React-MDL

♥ React-MDL and want to get involved?
Thanks! There are plenty of ways you can help!

Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of
the developers managing and developing this open source project. In return,
they should reciprocate that respect in addressing your issue or assessing
patches and features.


## Using the issue tracker

The [issue tracker](https://github.com/tleunen/react-mdl/issues) is
the preferred channel for
[bug reports](#bugs-reports),
[feature requests](#feature-requests)
and [submitting pull requests](#pull-requests),
but please respect the following restrictions:

* Please **do not** use the issue tracker for personal support requests.

* Please **do not** derail or troll issues. Keep the discussion on topic and
  respect the opinions of others.

* Please **do not** open issues or pull requests regarding the code in
  [Material Design Lite](https://github.com/google/material-design-lite). Open
  them in their repository.


## Bug reports

A bug is a _demonstrable problem_ that is caused by the code in the repository.
Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** &mdash; check if the issue has already been
   reported.

2. **Check if the issue has been fixed** &mdash; try to reproduce it using the
   latest `master`.

3. **Isolate the problem** &mdash; ideally create a small test case
   and a live example.

A good bug report shouldn't leave others needing to chase you up for more
information. Please try to be as detailed as possible in your report.
What steps will reproduce the issue? What is the actual behavior and
what would you expect to be the outcome? All these details will help
people to fix any potential bugs.

## Feature requests

Feature requests are welcome. But keep in mind we will not create
new components that are not available in Material Design Lite.


## Pull requests

Good pull requests - patches, improvements, new features - are a fantastic
help. They should remain focused in scope and avoid containing unrelated
commits.

**Please ask first** before embarking on any significant pull request (e.g.
implementing features or refactoring code), otherwise you risk spending a lot
of time working on something that we might not want to merge into the project.

Please adhere to the coding conventions used throughout a project (indentation,
accurate comments, etc.) and any other requirements (such as test coverage).

**For every bug fix, a regression test should also be added in the test suite.**

Commit your changes in logical chunks. Write a short (1 line) description
desribing the commit. Use Git's
[interactive rebase](https://help.github.com/articles/about-git-rebase/)
feature to tidy up your commits before making them public if needed.

And don't forget to test your code before creating a Pull Request. A PR with
a breaking test will never be merged.

   ```bash
   npm run test
   ```

**IMPORTANT**: By submitting a patch, you agree to allow the project
owners to license your work under the terms of the [MIT License](LICENSE.md).
