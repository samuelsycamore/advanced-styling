import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import ContactForm from "../Form/ContactForm";
import CardGrid from "../CardGrid/CardGrid";
import Table from "../Table/Table";
import DataGrid from "../DataGrid/DataGrid";

export default function NavDrawer() {
  return (
    <BrowserRouter>
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
            {[
              { text: "Contact Form", route: "/form" },
              { text: "Contact Card Grid", route: "/grid" },
              { text: "Contact Table", route: "/table" },
              { text: "Contact Data Grid", route: "/datagrid" },
            ].map((nav, index) => (
              <ListItem
                key={nav.text}
                sx={{
                  borderBottom: "1px solid",
                  borderBottomColor: "primary.main",
                }}
              >
                <Link to={nav.route}>{nav.text}</Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main>
          <Routes>
            <Route path="/" element={<ContactForm />} />
            <Route path="/form" element={<ContactForm />} />
            <Route path="/grid" element={<CardGrid />} />
            <Route path="/table" element={<Table />} />
            <Route path="/datagrid" element={<DataGrid />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
