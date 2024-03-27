const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('Userm');

// Register a new user 
exports.register = async (req, res) => { 
    try { 
        const { username, email, password, fullName, gender, dateOfBirth } = req.body; 
        // Check if user already exists 
        let existingUser = await User.findOne({ $or: [{ username }, { email }] }); 
        if (existingUser) { 
            return res.status(400).json({ message: 'User already exists' });
     } 
     // Hash the password 
     const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user 
      const newUser = new User({ username, email, password: hashedPassword, fullName, gender, dateOfBirth });
       await newUser.save(); 
       res.status(201).json({ message: 'User registered successfully' }); 
    } catch (error) { 
        console.error('Error registering user:', error);
         res.status(500).json({ message: 'Internal server error' });
    } }; 
   
    // Login user 
    exports.login = async (req, res) => {
        try { const { username, password } = req.body; 
        // Find user by username 
        const user = await User.findOne({ username });
         if (!user) { 
            return res.status(404).json({ message: 'User not found' }); 
        } 
        
        // Check password 
        const isPasswordValid = await bcrypt.compare(password, user.password); 
        if (!isPasswordValid) { 
            return res.status(401).json({ message: 'Invalid credentials' }); 
        } 
      
        // Create and return JWT token 
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.status(200).json({ token });
         } catch (error) { 
            console.error('Error logging in user:', error); 
            res.status(500).json({ message: 'Internal server error' });
         } 
        };
