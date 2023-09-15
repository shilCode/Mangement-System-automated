Feature: Login Functionality

  Scenario: Invalid login
    Given the user is on the login page
    When the user enters invalid credentials
    Then an alert with "Invalid credentials" is displayed

  Scenario: Login - Required field
    Given the user is on the login page
    When the user submits without filling required fields
    Then the required field messages are displayed

  # Scenario: Forget password
  #   Given the user is on the login page
  #   When the user clicks on the "Forgot Password" link and provides an invalid username
  #   Then a success message is displayed

  # Scenario: Valid login
  #   Given the user is on the login page
  #   When the user enters valid credentials
  #   Then the user is logged in and sees the profile picture on the dashboard
