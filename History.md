
1.7.0 / 2016-07-26
==================

  * New font-size and padding for Buttons
  * Fix: CSS Regression tests
  * Fix: PageSpeed/Jigsaw issues for the List Page
  * Fix: documentation for the library
  * updated showcar-tracking - includes dealer tracking adjusted to https
  * Fix: spy-navigation on M+ view
  * Added event for reinitializing collapse events.
  * Fix: styles for ExpandableBox
  * Various UI fixes
  * Fix: styles for the Card
  * Introduced Spy-navigation component
  * Added update event for rerendering pager.

1.6.0 / 2016-07-21
==================

  * removing topCars for CSS regression tests from spanish home page
  * reverting noscript changes since it does not have any effects
  * removed noscript tag - attempt to fix pagespeed issues/jigsaw problems on list page
  * added css regression test for spain home
  * updated backstopjs to latest version
  * added old no defer attribute to noscript tag
  * re-added onBeforeScripts for home trying to fix CSS tests
  * added no-defer attribute to noscript tag in order to prevent mod_pagespeed problems
  * removed before scripts for home page tests
  * added ramda dependency to package.json
  * copying docs files to public folder since public folder is default for gitlab pages
  * removed obsolete before scripts
  * adding CSS tests again
  * fixed priceestimation regression test url
  * Merge branch 'hotfix/1.5.13' into develop
  * Merge branch 'hotfix/1.5.12' into develop
  * Merge branch 'hotfix/1.5.11' into develop
  * Removed CSS tests for now
  * Merge branch 'hotfix/1.5.9' into develop
  * Fix: spy-navigation on M+ view
  * clean up
  * fixed spynav
  * Fixed version
  * Fixed docs setup
  * ignore docs
  * Removed old docs
  * unIgnore docs
  * Added event for reinitializing collapse events.
  * Merge branch 'hotfix/1.5.7' into develop
  * Merge branch 'hotfix/grunt-file-fixed' into develop
  * No test for now
  * No test for now
  * Fix for border-top
  * Revert "no pages"
  * no pages
  * pages
  * Small UI fixes
  * There is a better solution for the problem of ignored margin in percentage
  * Fixed margin for the Card Element
  * Christos / Ivan: fixing css tests
  * Introduced Spy-navigation component
  * Restored pager js to previous state, as it seems update mechanism not needed yet.
  * Added console log messages to pager to test update event handling
  * Try to set sample visitor cookies along with correct domain.
  * try fixing issue with AB testing using optimizely opt out parameter
  * Added before script to home.json
  * Try to fix come css tests by setting domain along with sample visitor cookie.
  * added update event for rerendering pager.
  * Fixed paddings for expandable boxes
  * Release 1.5.6

1.5.6 / 2016-07-11
==================

  * Fix: adding visitor cookie before all backstopJS tests in order to prevent failed tests due to testing.
  * Introduced a Card element
  * Added new utility class for absolute centering + added loading spinners
  * Introduced Expandable box component

1.5.3 / 2016-07-05

  * Updated showcar-tracking to v0.0.14
  * Added a "viewport-s" modifier to Breadcrumbs component that specifies which element should be visible on the screens that are smaller then 500px

1.5.2 / 2016-07-04

  * bumped version
  * updated showcar-tracking to latest release
  * Added a "viewport-s" modifier to Breadcrumbs component that specifies which element should be visible on the screens that are smaller then 500px
  * updated showcar-tracking
  * hotfix 1.5.2
  * Fixed the version reference for tracking lib
  * release 1.5.1
  * release 1.5.1
  * Updated version of the tracking library
  * Revert "Updated deploy script, added a fragment file"
  * Merge branch 'develop' of gitlab.com:web-experience/showcar-ui into develop
  * Updated deploy script, added a fragment file
  * Updated deploy script, added a fragment file
  * updated showcar-tracking to v0.0.12
  * remove spinners of stepper element in firefox
  * Merge branch 'release/1.5.0' into develop

1.5.1 / 2016-07-01
==================

  * Updated version of the tracking library
  * updated showcar-tracking to v0.0.12
  * remove spinners of stepper element in firefox

1.5.0 / 2016-06-28
==================

  * bumped version
  * added refine search page to CSS regression tests
  * explicitly setting height for custom dropdowns
  * fixing the custom dorpdown mess
  * fixed custom dropdown properly without side effects :-)
  * fixed custom dropdown properly without side effects :-)
  * Merge branch 'release/1.4.9' into develop

1.4.9 / 2016-06-27
==================

  * bumped version
  * better horizontal centering of labels in custom dropdowns
  * removed padding top for checkboxes
  * setting default min/max values for stepper
  * fixed custom dropdowns
  * fixed broken custom dropdowns - removed unnecessary element selectors
  * Merge branch 'release/1.4.8' into develop

1.4.8 / 2016-06-27
==================

  * increased version number
  * reverted form fix for iOs
  * added overflow-x hidden to all form elements to prevent iOS input rendering bug
  * adjusted stepper padding and font
  * changed button vertical padding to 7px
  * added custom element as24-carousel-item to check safari 8 bug
  * now supporting multiple steppers and fixing JS problems
  * only execute stepper code if stepper is available
  * added an additional input-group example with dropdowns
  * added new stepper form element
  * updated specs configuration + specs
  * updated sc-font-s font-size change in docs
  * Merge branch 'hotfix/1.4.7' into develop
  * Merge branch 'hotfix/notification-size' into develop
  * Fixed dependencies
  * Added license and contributing files
  * Added proper changelog
  * Added changelog file
  * CSS tests: added more exclude selectors for the home page + fixed list test script
  * Cleaned up dependecies
  * adjusted home CSS regression tests + added list.js script for CSS tests
  * Merge branch 'hotfix/1.4.5' into develop
  * Merge branch 'hotfix/icon-fix' into develop
  * added more logging for AWS
  * Merge branch 'hotfix/icon-name' into develop
  * Merge branch 'hotfix/icon-and-documentation' into develop

1.4.6 / 2016-06-16
==================

  * Fixed dependencies
  * Added license and contributing files
  * Added proper changelog
  * Added changelog file
  * CSS tests: added more exclude selectors for the home page + fixed list test script
  * Cleaned up dependecies
  * adjusted home CSS regression tests + added list.js script for CSS tests
  * added more logging for AWS

1.4.5 
=====
  * Fix for radio buttons when there's no class specified for the `input` 

1.4.4
=====
  * Font-size S to 0.8125rem = 13px
  * Line-height to 1.5
  * Cache all files except for html fragment for 30 days
  * Optimized css regression tests
  * Added new icon "environment.svg"
  * Fixed padding for the radio group
  * Added disabled state for the radio buttons
  * Fix for the group of radios

1.4.1
=====
  * Fixed buttons height

1.4.0
=====
  * Improved css regression tests
  * Updated icons ( carInsertion.svg, carInsertionEdit.svg, hookSquare.svg )
  * Bugfixes

1.3.5
=====
  * Fixed button CSS by removing fixed height

1.3.3
=====
  * Added css regression tests
  * Fixed the javascript sanity tests
  * Improved the gitlab-ci config

1.3.2
=====
  * Bugfixes

1.3.1
=====
  * Improved support for older iOS devices

1.3.0
=====
  * Proper Font loading added
  * Bug fixes
