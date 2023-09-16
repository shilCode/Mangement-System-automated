Feature: User Navigation and Actions in the Application

  Background:
    Given the user is on the login page
    When the user logs in with valid credentials

  Scenario: User can access user-related actions
    Then the user area is visible and editable
    When the user clicks on the user area
    Then the user sees "About" and can access it
    And the user sees "Support" and can access it
    And the user sees "Change Password" and can access it
    And the user sees "Logout" and can access it

  Scenario: User can view their profile
    Then the user area is visible and editable
    And the user area contains a profile link
    When the user clicks on the profile link
    Then the user can view their profile

  Scenario: User can access "About" and view information
    Then the user area is visible and editable
    And the user area contains "About"
    When the user clicks on "About"
    Then the user can view information in the "About" dialog
    And the user can close the "About" dialog

#   Scenario: User can access "Support" and view support information
#     Then the user area is visible and editable
#     And the user area contains "Support"
#     When the user clicks on "Support"
#     Then the user is taken to the support page
#     And the user sees support contact information
#     And the user can access help documentation

#   Scenario: User can change their password
#     Then the user area is visible and editable
#     And the user area contains "Change Password"
#     When the user clicks on "Change Password"
#     Then the user can change their password successfully

#   Scenario: User can log out
#     Then the user area is visible and editable
#     And the user area contains "Logout"
#     When the user clicks on "Logout"
#     Then the user is logged out

