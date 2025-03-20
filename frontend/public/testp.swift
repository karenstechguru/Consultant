MyBackend/
├── server/
│   ├── app.js (or app.py, app.rb, etc. depending on your backend language)
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── consultantRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── consultantController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Consultant.js
│   │   └── Admin.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── config/
│   │   └── db.js
│   └── package.json
└── Tests/
    ├── auth.test.js
    └── user.test.js


    MyApp/
├── MyApp.xcodeproj
├── MyApp/
│   ├── AppDelegate.swift
│   ├── SceneDelegate.swift
│   ├── ContentView.swift
│   ├── Views/
│   │   ├── LoginView.swift
│   │   ├── UserLoginView.swift
│   │   ├── ConsultantLoginView.swift
│   │   └── AdminLoginView.swift
│   ├── Models/
│   │   ├── User.swift
│   │   ├── Consultant.swift
│   │   └── Admin.swift
│   ├── ViewModels/
│   │   ├── LoginViewModel.swift
│   │   └── UserViewModel.swift
│   └── Resources/
│       ├── Assets.xcassets
│       └── Info.plist
└── Tests/
    ├── MyAppTests/
    └── MyAppUITests/


    import SwiftUI
import AuthenticationServices

struct ContentView: View {
    var body: some View {
        NavigationView {
            ZStack {
                Image("sea3")
                    .resizable()
                    .scaledToFill()
                    .edgesIgnoringSafeArea(.all)

                VStack {
                    Text("Welcome to PocketPal")
                        .font(.title)
                        .foregroundColor(Color.white)
                        .padding()

                    NavigationLink(destination: UserLoginView()) {
                        Text("User Login")
                            .font(.title3)
                            .padding()
                            .background(Color.black)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                    }

                    NavigationLink(destination: ConsultantLoginView()) {
                        Text("Consultant Login")
                            .font(.title3)
                            .padding()
                            .background(Color.black)
                            .foregroundColor(.white)
                            .cornerRadius(10)
                    }
                }
            }
        }
    }
}

struct UserLoginView: View {
    @State private var username: String = ""
    @State private var password: String = ""

    var body: some View {
        VStack {
            Text("User Login")
                .font(.title3)
                .padding()

            TextField("Username", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Password", text: $password)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Handle user login action
                print("User logging in with username: \(username)")
            }) {
                Text("Login")
                    .font(.title3)
                    .padding()
                    .background(Color.black)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            .padding()

            // Sign in with Apple button
            
            SignInWithAppleButton(
                onRequest: { request in
                    // Configure the request
                    request.requestedScopes = [.fullName, .email]
                },
                onCompletion: { result in
                    switch result {
                    case .success(let authResults):
                        // Handle successful authentication
                        print("Successfully signed in with Apple: \(authResults)")
                    case .failure(let error):
                        // Handle error
                        print("Failed to sign in with Apple: \(error.localizedDescription)")
                    }
                }
            )
            .signInWithAppleButtonStyle(.black) // You can change the style to .white or .whiteOutline
            .frame(height: 44) // Set the height of the button
            .padding()

            NavigationLink(destination: UserRegistrationView()) {
                Text("Don't have an account? Register")
                    .foregroundColor(.black)
                    .padding()
            }
        }
        .padding()
    }
}

struct ConsultantLoginView: View {
    @State private var username: String = ""
    @State private var password: String = ""

    var body: some View {
        VStack {
            Text("Consultant Login")
                .font(.title3)
                .padding()

            TextField("Username", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Password", text: $password)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Handle consultant login action
                print("Consultant logging in with username: \(username)")
            }) {
                Text("Login")
                    .font(.title3)
                    .padding()
                    .background(Color.black)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            .padding()

            // Sign in with Apple button
            SignInWithAppleButton(
                onRequest: { request in
                    // Configure the request
                    request.requestedScopes = [.fullName, .email]
                },
                onCompletion: { result in
                    switch result {
                    case .success(let authResults):
                        // Handle successful authentication
                        print("Successfully signed in with Apple: \(authResults)")
                    case .failure(let error):
                        // Handle error
                        print("Failed to sign in with Apple: \(error.localizedDescription)")
                    }
                }
            )
            .signInWithAppleButtonStyle(.black) // You can change the style to .white or .whiteOutline
            .frame(height: 44) // Set the height of the button
            .padding()

            NavigationLink(destination: ConsultantRegistrationView()) {
                Text("Don't have an account? Register")
                    .foregroundColor(.black)
                    .padding()
            }
        }
        .padding()
    }
}

struct UserRegistrationView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var confirmPassword: String = ""

    var body: some View {
        VStack {
            Text("User Registration")
                .font(.title)
                .padding()

            TextField("Username", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Password", text: $password)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Confirm Password", text: $confirmPassword)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Handle user registration action
                print("Registering user with username: \(username)")
            }) {
                Text("Register")
                    .font(.title)
                    .padding()
                    .background(Color.black)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            .padding()
        }
        .padding()
    }
}

struct ConsultantRegistrationView: View {
    @State private var username: String = ""
    @State private var password: String = ""
    @State private var confirmPassword: String = ""

    var body: some View {
        VStack {
            Text("Consultant Registration")
                .font(.title)
                .padding()

            TextField("Username", text: $username)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Password", text: $password)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            SecureField("Confirm Password", text: $confirmPassword)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .padding()

            Button(action: {
                // Handle consultant registration action
                print("Registering consultant with username: \(username)")
            }) {
                Text("Register")
                    .font(.title)
                    .padding()
                    .background(Color.black)
                    .foregroundColor(.white)
                    .cornerRadius(10)
            }
            .padding()
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
