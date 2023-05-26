import User from '../../../../../server/models/userModel';
import connectMongo from '../../../../../server/config';

export default async function handler(req, res) {

    try {
           await connectMongo();
            const user = await User.find({});
            if(user) {
                res.status(200).json({success: true, user: user});
                
            }
            else {
              res.status(200).json({success: false, user: null});
            }
          
            
          } catch (error) {
            res.status(400).json({ success: false, error: 'failed to fetch user' });
          }
        
   

}


