const User = require('PetProfilem'); 
// Get all users 
exports.getAllUsers = async (req, res) => { 
    try { 
        const users = await User.find(); 
        res.status(200).json(users); 
    } catch (error) { 
        console.error('Error fetching users:', error); 
        res.status(500).json({ message: 'Internal server error' }); } };
// Get user by ID 
exports.getUserById = async (req, res) => {
         try {
             const user = await User.findById(req.params.id);
             if (!user) { 
                return res.status(404).json({ message: 'User not found' }); 
            } 
            res.status(200).json(user); 
        } catch (error) { 
            console.error('Error fetching user by ID:', error);
             res.status(500).json({ message: 'Internal server error' }); 
            } }; 
// Update user by ID 
exports.updateUserById = async (req, res) => {
         try { 
            const { fullName, email, gender, dateOfBirth } = req.body; 
            const updatedUser = await User.findByIdAndUpdate( req.params.id, 
                { fullName, email, gender, dateOfBirth }, { new: true } ); 
                if (!updatedUser) { 
                    return res.status(404).json({ message: 'User not found' });
                 } 
                 res.status(200).json(updatedUser); 
                } catch (error) { 
                    console.error('Error updating user by ID:', error);
                    res.status(500).json({ message: 'Internal server error' }); 
            } }; 
            
// Delete user by ID  
exports.deleteUserById = async (req, res) => { 
         try { 
                    const deletedUser = await User.findByIdAndDelete(req.params.id); 
                    if (!deletedUser) { 
                        return res.status(404).json({ message: 'User not found' }); 
                    } 
                    res.status(200).json({ message: 'User deleted successfully' });
                 } catch (error) { 
                    console.error('Error deleting user by ID:', error); 
                    res.status(500).json({ message: 'Internal server error' });
             } };
