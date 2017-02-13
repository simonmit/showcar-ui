
2.0.0 / 2017-02-13
==================

  * initializing global variables to avoid some exceptions
  * replace overwflow auto to hidden
  * Merge pull request #99 from mpuppin/patch-1
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * key encryption only for master branch when no PR
  * Update reset.scss
  * added vscode to gitignore
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * standolone fragment without icons and tracking
  * add overflow to solve border-raduis problem
  * add -error-text
  * added missing variable
  * adjusted tooltip arrow
  * add %customInputStyles
  * Merge branch 'master' of https://github.com/AutoScout24/showcar-ui
  * copy all mixins to legacy-mixins
  * some cleanup
  * revert deploy test
  * Old keyfile not needed anymore
  * test deploy
  * key
  * try to fix travis keys encription
  * trying to fix encryption
  * added secure key for travis release
  * bump again
  * bump build
  * improved travis build script
  * only cloning release branch
  * pushing to git
  * fixed gh token
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * using team email
  * add input mixin
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * checking commit email
  * Merge branch 'master' of https://github.com/AutoScout24/showcar-ui
  * repair tooltip
  * fixed git config
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * fixed build script
  * add color-selector mixin
  * travis deploy
  * release script for travis
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * added secure variable
  * add button mixin
  * add elllipsis mixin
  * dist files are generated
  * fixed scss path
  * using after_success
  * script deployment
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * fixed script condition
  * add link mixin
  * bash flags
  * does it run?
  * running travis release for master and not for PRs
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * first step towards travis deploy
  * add legacy-mixins.scss
  * listing artifacts
  * not running yarn manually
  * bump
  * added first travis ci build
  * Merge branch 'develop'
  * rebuilt lightbox with custom element
  * Merge remote-tracking branch 'origin/atomic-design' into develop
  * repait icons src
  * add js to dev compile
  * replace icons
  * merged branch: atomic-design to develop
  * Merge branch 'master' of github.com:AutoScout24/showcar-ui
  * not installing some packages
  * Update README.md
  * change link color
  * replace z-index
  * bump
  * bump
  * add defaults to tooltip
  * Merge tag 'descrease-z-indexes' into develop
  * Merge branch 'hotfix/descrease-z-indexes'
  * Merge tag 'gtmdelaertracking' into develop
  * bumped tracking version number
  * repait styles
  * repair links
  * make everything done
  * clean up directories, make proper links in import
  * clean up fonts, add editor conf, move components
  * docs only built for master branch again
  * building showcar-tracking.js as well
  * first step towards a standalone showcar-tracking fragment
  * improved script loading
  * improved deferred icons loading
  * improved deferred loading of icons
  * added missing no-defer attribute
  * update js structure
  * first step towards a separate showcar-icons fragment
  * update scss structure
  * put js component in each folder
  * put each component in each folder
  * build docs in dev branch
  * update branches
  * remove vanilaJsHelper
  * repace class to prototype in tooltip ios8 bug
  * tmp test z-indexes
  * renamed folders
  * Merge tag 'forminputsios' into develop
  * WIP: refactoring structure to ITCSS - atomic design approach
  * add extra information in documentation for tooltip
  * code cleanup
  * add new documentation for new tooltip
  * move new tooltip to separate file
  * add visibility to tooltip
  * replace to another tooltip

1.13.1 / 2017-01-23
==================

  * Diana/Nina: added complex responsive behavior for lightbox

1.13.0 / 2017-01-20
==================

  * Merge tag '1.13.0' into develop

1.12.2 / 2017-01-17
==================

  * increased z-index for tooltip
  * changed tooltip arrow
  * fixed 200 test
  * log test
  * build documentation in develop (temp)
  * changed link to css for header example
  * added cursor pointer for toggle text
  * migrated backstopjs to version 2.x

1.12.1 / 2016-12-16
==================

  * Don't build docs for develop branch

1.12.0 / 2016-12-16
==================

  * remove show less label from docs
  * #AS24-#18669, some changes and fixes as defined in the tickets
  * Merge branch 'develop' of gitlab.com:web-experience/showcar-ui into develop
  * adjusted arrow in tooltip
  * run docs in develop (to be removed after tooltip done)
  * styled tooltip in docs
  * added tooltip (squshed)
  * #AS24-18671, #AS24-18669
  * Merge tag 'slack-notifications' into develop

1.11.4 / 2016-11-21
==================

  * only showing spinner image while lazy image is being loaded
  * removed svg hover styles from links
  * using static image for spinner
  * changed disabled state for button ross
  * fixed file path
  * added build script to send data to datadog
  * added auto cursor behavior to text inputs
  * trying to fix ghost radio circles in some cases
  * added vendor prefixes for spinner svg
  * fixed stepper for FF

1.11.3 / 2016-11-11
==================

  * changed cursor behavior to auto in text inputs   


1.11.1 / 2016-11-03
==================

  * remove focus from buttons

1.11.0 / 2016-11-03
==================

  * change direction of spinner
  * update showcar-icons version in dependencies
  * fixed spinner animation to use CSS animations instead of SMIL and no to eat up all the CPU
  * Mathias/Diana: added hover cursor on custom dropdown
  * Mathias/Diana: review changes custom dropdownp
  * decrease margin in header
  * added example of disabled state to demo page
  * added styles for disabled state
  * added bottom border on every header
  * changed watch task options to solve problems on mac
  * optimized js build in watch mode
  * improved watching with browserSync and optimized watch task
  * watch only rebuilds docs
  * added style and html for dropdown without checkbox
  * changed spacing in header (big size)
  * element added to example page

1.9.0 / 2016-10-12
==================

  * using new showcar-tracking
  * updated showcar-tracking to a working version
  * using newer version of tracking lib to be able to test the new array logic
  * fixed pagintation link: no href on first and last page
  * minor cleanup
  * changed padding for spy navigation links
  * adjusted spy-navigation orange border + link padding
  * added orange border to active spy navigation element
  * Removed unnecessary body tag
  * Renamed the file back
  * Adam/Ivan: attempt to fix the order of scripts
  * Attempt to fix docs deneration
  * Merge branch 'release/v1.8.6' into develop

1.8.6 / 2016-09-05
==================

  * fixed lazy loading images documentation

1.8.5 / 2016-09-05
==================

  * adjusted card margin top to 1vh
  * removed border top for card content
  * fixed IE11 cards bug
  * Updated the spinner for the lazy-image
  * Added lazy image + lazysizes
  * forcing system fonts
  * improved readme
  * testing system fonts

1.8.4 / 2016-09-02
==================

  * fixed spy navigation link visibility
  * closing spyNavigation after selecting an entry
  * card adjustments
  * fixed mq in cards
  * adjusted card flex settings for M-L views
  * adjusted cards container

1.8.3 / 2016-08-31
==================

  * Temporary fix for issue with misplaced notification due to undefined offset height position.
  * reading pager next/previous text from data attributes
  * Merge tag 'quickfix-dre' into develop

1.8.2 / 2016-08-24
==================

  * reverted document-register-element to an earlier version in order to fix Safari/Webkit issues

1.8.1 / 2016-08-24
==================
 * fixed issues with document-register-element in Safari


1.8.0 / 2016-08-24
==================

 * using stages for better visibility on gitlab UI
 * running all gitlab stages in one build so that it takes significantly less time
 * only running docs generation for master branch
 * moving npm install into separate build stage to be able to see its duration
 * cleaning up node modules on gitlab
 * got rid of unused dependencies
 * updated document-register-element polyfill to latest version
 * got rid of unnecessary generate-polyfills grunt task
 * not copying unused polyfills
 * inlining almost all polyfills to make Google Page Speed Insights happy + using smaller and simpler polyfills for Array.of, Array.from and Object.assign methods
 * removed snippet task because grunt-replace does its job
 * only copying docs when building docs
 * removed unnecessary polyfills -> they are in the fragment now
 * running tasks for new polyfill solution
 * every file inside dist/ gets deployed to S3
 * using generate-polyfills task for Object.assign and Array.from/of/isArray methods
 * task for generating custom polyfills
 * not running css test for now because they are always red
 * preparing new polyfills solution (WIP)
 * added current version number of showcar-icons - trying to fix icons update issue

1.7.6 / 2016-08-22
==================

 * Merge branch 'hotfix/v1.7.6' into develop
 * removed unnecessary element registration
 * added todo's
 * removed unused polyfills + moved polyfills to showcar-ui.js
 * updated scrolling documentation
 * added a class for smooth scrolling + added smooth scrolling for spy navigation
 * adjusted scroll.js to use startsWith selector + fixed spy navigation examples
 * changed spy navigation - removed orange bottom border + added shadow to bottom
 * triggering smooth scrolling for all links
 * Merge branch 'hotfix/1.7.4' into develop

1.7.3 / 2016-08-08
==================

  * updated showcar-icons version
  * Removed improper image from docs
  * release 1.7.2

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
