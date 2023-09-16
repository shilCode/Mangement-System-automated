# Feature: Dashboard and Sidebar Functionality

#   Background:
#     Given the user is on the login page
#     When the user logs in with valid credentials

#   Scenario: Dashboard should be the landing page after login
#     Then the user sees the dashboard header

#   Scenario: Sidebar can be hidden
#     When the user clicks the main menu button
#     Then the main menu button should be editable

#   Scenario: All sidebar components are visible
#     Then the main menu button should be editable
#     And the user sees the "Admin" component
#     And the user sees the "PIM" component
#     And the user sees the "Leave" component
#     And the user sees the "Time" component
#     And the user sees the "Recruitment" component
#     And the user sees the "My Info" component
#     And the user sees the "Performance" component
#     And the user sees the "Dashboard" header
#     And the user sees the "Maintenance" component
#     And the user sees the "Directory" component
#     And the user sees the "Buzz" component

#   Scenario: Sidebar search is functional
#     When the user enters "Admin" in the search bar
#     Then the "Admin" component should be visible
#     And the "Performance" component should be hidden
