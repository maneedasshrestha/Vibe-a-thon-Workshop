# IT Circle Workshop - Contributor Template

Welcome to the IT Circle Workshop! This is a collaborative project where all workshop attendees can contribute by adding their name to our community page.

## 🎯 Objective

Learn Git/GitHub collaboration by adding your information to our workshop contributors page.

## 🚀 Getting Started

### Prerequisites
- Git installed on your computer
- GitHub account
- Basic text editor or VS Code

### Step-by-Step Instructions

#### 1. Fork the Repository
- Click the "Fork" button at the top right of this repository
- This creates your own copy of the project

#### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/workshop.git
cd workshop
```

#### 3. Create a New Branch
```bash
git checkout -b add-your-name
```
Replace `your-name` with your actual name (e.g., `add-john-doe`)

#### 4. Add Your Information

Open `index.html` in your text editor and find this section:
```html
<!-- ADD YOUR CARD HERE -->
<!-- Copy the structure below and replace with your information:

<div class="contributor-card">
    <div class="contributor-name">Your Full Name</div>
    <div class="contributor-role">Your Role/Title</div>
</div>

-->
```

**Replace the commented example with your actual information:**
```html
<!-- ADD YOUR CARD HERE -->
<div class="contributor-card">
    <div class="contributor-name">Jane Smith</div>
    <div class="contributor-role">Software Developer</div>
</div>
```

#### 5. Save and Test Locally
- Save the `index.html` file
- Open it in your web browser to see your changes
- Make sure your name appears correctly

#### 6. Commit Your Changes
```bash
git add index.html
git commit -m "Add [Your Name] to contributors"
```

#### 7. Push to Your Fork
```bash
git push origin add-your-name
```

#### 8. Create a Pull Request
- Go to your forked repository on GitHub
- Click "Compare & pull request"
- Add a title like "Add [Your Name] to contributors"
- Click "Create pull request"

## 📝 Contribution Guidelines

### What to Include:
- **Full Name**: Your real name or preferred display name
- **Role/Title**: Your current job title, student status, or area of expertise

### Examples:
```html
<div class="contributor-card">
    <div class="contributor-name">Manee Das Shrestha</div>
    <div class="contributor-role">Frontend Developer</div>
</div>
```

```html
<div class="contributor-card">
    <div class="contributor-name">Niraj Nath</div>
    <div class="contributor-role">Computer Science Student</div>
</div>
```

### Important Rules:
1. **Add only ONE contributor card** (yourself)
2. **Place your card BEFORE the "Add Yourself Here!" placeholder**
3. **Use appropriate and professional role descriptions**
4. **Don't modify other contributors' information**
5. **Don't change the overall styling or structure**

## 🎨 How It Works

The page features:
- **Responsive Design**: Works on desktop and mobile
- **Animated Cards**: Hover effects and smooth transitions
- **Auto Counter**: Automatically counts the number of contributors
- **Modern Styling**: Clean, professional appearance

## 📂 Project Structure

```
workshop/
├── index.html          # Main HTML file (this is what you'll edit)
├── README.md          # This instruction file
└── .gitignore         # Git ignore rules
```

## ❓ Need Help?

### Common Issues:

**Q: I don't see my changes on the live page**
A: Your pull request needs to be approved and merged first.

**Q: My card doesn't look right**
A: Make sure you copied the exact HTML structure and only changed the name and role.

**Q: I made a mistake in my pull request**
A: You can make additional commits to the same branch, and they'll automatically be added to your pull request.

**Q: Git commands aren't working**
A: Make sure you're in the correct directory and have Git installed properly.

### Getting Support:
1. Check this README again
2. Ask a fellow workshop attendee
3. Reach out to the workshop facilitator
4. Create an issue in this repository

## 🏆 Learning Outcomes

By completing this exercise, you will:
- ✅ Learn basic Git commands
- ✅ Understand the GitHub workflow
- ✅ Practice HTML editing
- ✅ Experience collaborative development
- ✅ Create your first open source contribution!

## 🎉 After Your Contribution

Once your pull request is merged:
1. Your name will appear on the live website
2. You'll be listed as a contributor to this repository
3. You can share your first open source contribution!

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Contributing! 🚀**

*Made with ❤️ for the IT Circle Workshop community*