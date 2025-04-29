### Signup Test Cases

| Test Case ID   | Priority | Preconditions | Scenario                              | Steps                                                                 | Expected Result                                    | Actual Result | Status |
|---------------|----------|---------------|---------------------------------------|-----------------------------------------------------------------------|----------------------------------------------------|---------------|--------|
| **TC-SU-01**  | High     | None          | Successful Signup                     | 1. Enter valid Email<br>2. Enter strong Password<br>3. Confirm Password<br>4. Click "Sign Up" | Account created; redirected to Sign In page        |               |        |
| **TC-SU-02**  | Medium   | None          | Invalid Email Format                  | 1. Enter invalid email (e.g., `abc`)<br>2. Click "Sign Up"            | Error: `"Invalid Email format"`                    |               |        |
| **TC-SU-03**  | Medium   | None          | Weak Password (missing special char)  | 1. Enter password without special char (e.g., `Pass1234`)<br>2. Submit | Error: `"Password must include special character"` |               |        |
| **TC-SU-04**  | Medium   | None          | Weak Password (<8 chars)              | 1. Enter short password (e.g., `Ab1@`)<br>2. Submit                   | Error: `"Password must be minimum 8 characters"`   |               |        |
| **TC-SU-05**  | Medium   | None          | Password/Confirm mismatch             | 1. Enter different values in Password and Confirm fields<br>2. Submit | Error: `"Passwords do not match"`                  |               |        |
| **TC-SU-06**  | High     | None          | Signup with registered Email          | 1. Use existing email<br>2. Submit                                   | Error: `"Email already in use"`                    |               |        |

### Sign-In Test Cases

| Test Case ID   | Priority | Preconditions | Scenario               | Steps                                         | Expected Result                        | Actual Result | Status |
|---------------|----------|---------------|------------------------|-----------------------------------------------|----------------------------------------|---------------|--------|
| **TC-SI-01**  | High     | Valid account exists | Successful Sign In     | 1. Enter valid credentials<br>2. Click "Sign In" | Redirected to dashboard/home          |               |        |
| **TC-SI-02**  | Medium   | Valid account exists | Incorrect Password     | 1. Enter registered email + wrong password<br>2. Submit | Error: `"Invalid Email or Password"`  |               |        |
| **TC-SI-03**  | Medium   | None          | Non-existing User      | 1. Enter unregistered email<br>2. Submit      | Error: `"Account not found"`          |               |        |
| **TC-SI-04**  | Low      | None          | Blank Inputs           | 1. Leave both fields empty<br>2. Submit       | Error: `"Email and Password required"` |               |        |

### Signout Test Cases

| Test Case ID   | Priority | Preconditions | Scenario                              | Steps                                         | Expected Result                        | Actual Result | Status |
|---------------|----------|---------------|---------------------------------------|-----------------------------------------------|----------------------------------------|---------------|--------|
| **TC-SO-01**  | High     | User is signed in | Signout button visibility | 1. Sign in successfully<br>2. Check upper right corner | Signout button should be visible      |               |        |
| **TC-SO-02**  | High     | User is signed in | Signout functionality   | 1. Click signout button<br>2. Check upper right corner | Signin button should appear           |               |        |
| **TC-SO-03**  | Medium   | User is signed out | Browser back button     | 1. Click browser back button                  | Should redirect to signin page        |               |        |

### Node Onboarding Test Cases

| Test Case ID    | Priority | Preconditions | Scenario                     | Steps                                                                 | Expected Result                          | Actual Result | Status |
|----------------|----------|---------------|-----------------------------|-----------------------------------------------------------------------|------------------------------------------|---------------|--------|
| **TC-NODE-01** | High     | User is signed in | Add Single Node and Wallet   | 1. Fill Node ID, IP, Wallet Address<br>2. Click "ADD"<br>3. Click "NEXT"<br>4. Submit | Request created successfully            |               |        |
| **TC-NODE-02** | High     | User is signed in | Add Multiple Nodes           | 1. Add first node (repeat steps from TC-NODE-01)<br>2. Click "ADD" for each additional node<br>3. Proceed | All nodes listed in summary            |               |        |
| **TC-NODE-03** | Medium   | User is signed in | Invalid Node ID Format       | 1. Enter invalid Node ID (e.g., `12345`)<br>2. Submit                 | Error: `"Invalid Node ID format"`       |               |        |
| **TC-NODE-04** | Medium   | User is signed in | Invalid IP Address          | 1. Enter invalid IP (e.g., `999.999.1.1`)<br>2. Submit               | Error: `"Invalid IP Address"`           |               |        |
| **TC-NODE-05** | Medium   | User is signed in | Invalid Wallet Address      | 1. Enter invalid wallet address<br>2. Submit                          | Error: `"Invalid Wallet Address"`       |               |        |
| **TC-NODE-06** | Medium   | User is signed in | Missing Fields              | 1. Leave any required field empty<br>2. Submit                        | Error: `"[Field Name] is required"`     |               |        |

### Blockchain Creation Test Cases

| Test Case ID   | Priority | Preconditions | Scenario                       | Steps                                                                 | Expected Result                          | Actual Result | Status |
|---------------|----------|---------------|-------------------------------|-----------------------------------------------------------------------|------------------------------------------|---------------|--------|
| **TC-BC-01**  | High     | User is signed in | Successful Blockchain Creation | 1. Fill all fields correctly (Network Name, Consensus, etc.)<br>2. Click "Submit" | Blockchain created successfully        |               |        |
| **TC-BC-02**  | Medium   | User is signed in | Invalid Wallet Format         | 1. Enter invalid wallet address (e.g., `xyz123`)<br>2. Submit         | Error: `"Invalid Wallet Address"`       |               |        |
| **TC-BC-03**  | Medium   | User is signed in | Missing Network Name          | 1. Leave Network Name field empty<br>2. Submit                        | Error: `"Network Name required"`        |               |        |
| **TC-BC-04**  | High     | User is signed in | Multiple Nodes Addition       | 1. Add first node (valid details)<br>2. Click "Add Node"<br>3. Repeat for multiple nodes<br>4. Submit | All nodes saved in blockchain configuration |               |        |

### Test Data Requirements
- Valid email addresses (for signup and signin)
- Valid and invalid password combinations
- Valid and invalid Node IDs
- Valid and invalid IP addresses
- Valid and invalid wallet addresses
- Network names (valid and invalid)