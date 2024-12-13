import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ColorModeIconDropdown from './theme/ColorModeIconDropdown';
 
import './App.css' 
import { Card,  Grow  } from '@mui/material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme).palette.divider,  
    backgroundColor: theme
    ? `rgba(${theme.palette.background.default} / 0.4)`
    : alpha(theme, 0.4),
    boxShadow: (theme).shadows[1],
    padding: '8px 12px',
  }));

    

function App() { 
 
const [open, setOpen] = React.useState(false);

const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

const user = {
    name: 'Help desk',
    imageUrl: 'src/assets/live-chat.png',
    imageSize: 40,
  };
  const checked= true

  return (
    <>    
    <AppBar
      position="fixed"
      
      enableColorOnDark
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        backgroundImage: 'none',
        mt: 'calc(var(--template-frame-height, 0px) + 28px)',
      }}
    >
      <Container maxWidth="lg">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
          <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
/>       

<div className='logo'  >
<a href="" className="logo-text" >XGEN</a>
<a href="" className="logo-text2" >solutions</a>
</div>
 
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant="text" color="info" size="small">
                Features
              </Button>
              <Button variant="text" color="info" size="small">
                Testimonials
              </Button>
              <Button variant="text" color="info" size="small">
                Highlights
              </Button>
              <Button variant="text" color="info" size="small">
                Pricing
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                FAQ
              </Button>
              <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }}>
                Blog
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 1,
              alignItems: 'center',
            }}
          >
            <Button color="primary" variant="text" size="small">
              Sign in
            </Button>
            <Button color="primary" variant="contained" size="small">
              Sign up
            </Button>
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="top"
              open={open}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  top: 'var(--template-frame-height, 0px)',
                },
              }}
            >
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>

                <MenuItem>Features</MenuItem>
                <MenuItem>Testimonials</MenuItem>
                <MenuItem>Highlights</MenuItem>
                <MenuItem>Pricing</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Blog</MenuItem>
                <Divider sx={{ my: 3 }} />
                <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color="primary" variant="outlined" fullWidth>
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
   
    <section className="hero"> 
    <Grow 
    in={checked} 
    style={{ WebkitBorderRadius:  '15px 50px 30px', transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 1000 } : {})}>

    <Card className='hero-card' variant="outlined" style={{ opacity: 0.9 }} > 
    
    <h1>Welcome to Our Help Desk</h1>
        <p>Streamline your customer support with our powerful help desk solution. Get started in minutes and improve your customer satisfaction.</p>
        <a href="#get-started" className="btn btn-primary">Create Tricket</a>
    </Card> 
    </Grow>


         
    </section> 
    <Divider/>
    <div className="section-divider">

    </div>
    <Divider/>
    <section className="features">
    <div className="feature-card"> 
        <div className="features-grid">
            

            </div> 
        </div>
    </section>

    <Divider/>
    <div className="section-divider">
      
    </div>
    <Divider/>

    <section className="search-section">
        <h2>How can we help you?</h2>
        <div className="search-box"> 
          
          <input type="text" className="search-input" placeholder="Search our knowledge base..."/>
        </div>
    </section>

    <Divider/>
    <div className="section-divider">
      
    </div>
    <Divider/>


    <section className="cta">
    <Grow 
    in={checked} 
    style={{ WebkitBorderRadius:  '15px 50px 30px', transformOrigin: '0 0 0' }}
    {...(checked ? { timeout: 1000 } : {})}>

    <Card className='hero-card' variant="outlined" style={{ opacity: 0.9 }} > 
    <section className="contact-section">
        <div className="contact-container">
            <div className="contact-info">
                <h2>Get In Touch</h2>
                <div className="info-item">
                    <i>📍</i>
                    <div>
                        <h3>Location</h3>
                        <p>123 Tech Street, IT City, 12345</p>
                    </div>
                </div>
                <div className="info-item">
                    <i>📞</i>
                    <div>
                        <h3>Phone</h3>
                        <p>24/7 Support: +1 (555) 123-4567</p>
                    </div>
                </div>
                <div className="info-item">
                    <i>✉️</i>
                    <div>
                        <h3>Email</h3>
                        <p>support@ithelpdesk.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <i>⏰</i>
                    <div>
                        <h3>Hours</h3>
                        <p>24/7 Technical Support</p>
                    </div>
                </div>
            </div>
            
            <div className="contact-form">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" id="name" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" className="form-control" required></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    </section> 
    </Card> 
    </Grow>
    </section>
       

      <Divider/>
    <div className="section-divider">
      
    </div>
    <Divider/>

      <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>About Us</h3>
                <p>We are dedicated to providing the best service to our customers. Our mission is to create value through innovation.</p>
            </div>
            
            <div className="footer-section">
                <h3>Quick Links</h3>
                <a href="#home">Home</a>
                <a href="#services">Services</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-section">
                <h3>Contact Info</h3>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Street Name, City, Country</p>
            </div>
            
            <div className="footer-section">
                <h3>Follow Us</h3>
                <div className="social-links">
                    <a href="#" aria-label="Facebook">f</a>
                    <a href="#" aria-label="Twitter">t</a>
                    <a href="#" aria-label="Instagram">i</a>
                    <a href="#" aria-label="LinkedIn">in</a>
                </div>
            </div>
        </div>
        
        <div className="bottom-bar">
            <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div> 
      </footer>
    </>
  )
} 
export default App
