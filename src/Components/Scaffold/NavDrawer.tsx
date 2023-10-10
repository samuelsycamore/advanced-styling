import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export default function NavDrawer() {
    return (
        <div>
            <AppBar position="fixed">
              <Toolbar>
                <Typography variant="h6" noWrap>
                  Material UI styling
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer variant="temporary" open={true}>
              <List>
                <ListItem>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
            <main>

            </main>
        </div>
    )
}