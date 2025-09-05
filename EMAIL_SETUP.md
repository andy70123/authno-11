# Email Setup Guide for Authno Website

## 📧 **Email Collection Setup**

Your footer email form is now configured to collect emails and send them to **Sohanzerotwo@gmail.com**.

### **Setup Steps:**

1. **Create Environment File:**
   - Create a file named `.env.local` in your project root
   - Add the following content:

```env
EMAIL_USER=Sohanzerotwo@gmail.com
EMAIL_PASS=your-gmail-app-password
```

2. **Get Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification
   - Scroll down to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password
   - Replace `your-gmail-app-password` in `.env.local` with this password

3. **Test the Setup:**
   - Start your development server: `npm run dev`
   - Go to your website footer
   - Enter an email and click "SUBSCRIBE"
   - Check your Gmail inbox for the subscription email

### **How It Works:**

- **User enters email** in footer form
- **Form validates** email format
- **API sends email** to Sohanzerotwo@gmail.com
- **You receive notification** with subscriber details
- **User sees confirmation** message

### **Email Content Includes:**
- Subscriber's email address
- Subscription date and time
- Source (Authno website)
- Professional HTML formatting

### **Security Notes:**
- Never commit `.env.local` to version control
- Use App Password, not your regular Gmail password
- The API endpoint is protected and only accepts POST requests

Your email collection system is now ready! 🚀
