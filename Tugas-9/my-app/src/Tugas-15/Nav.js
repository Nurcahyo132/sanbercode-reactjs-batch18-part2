import React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Tugas9 from '../Tugas-9/Tugas9';
import Table from '../Tugas-10/Table';
import Timer from '../Tugas-11/Timer';
import Form from '../Tugas-12/Form';
import Axios from '../Tugas-13/Axios';
import DataHargaBuah from '../Tugas-14/DataHargaBuah';

import "./Color.css";
import { useContext } from "react";
import {  ThemeContext } from './Tema';


const Nav = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    const handleChangeMode = () => {
        if(theme == "light-mode"){
            setTheme("dark-mode");
        } else {
            setTheme("light-mode");
        }
    };

    return (
        <Router>
            <div className = "navigasi">
            <nav className={theme}>
          <ul>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-9/Tugas9">
                Home
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-10/Table">
                Tugas 10
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-11/Timer">
                Tugas 11
              </Link>
            </li>
            <li>
              <Link
                className={theme + " link-nav"}
                to="../Tugas-12/Form"
              >
                Tugas 12
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-13/Axios">
                Tugas 13
              </Link>
            </li>
            <li>
              <Link className={theme + " link-nav"} to="../Tugas-14/DataHargaBuah">
                Tugas 14
              </Link>
            </li>
            <li>
              <div className="box-togle">Mode</div>
              <input
                type="checkbox"
                checked={theme == "light-mode" ? true : false}
                onChange={handleChangeMode}
                className="togle-check"
              />
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/Tugas-9/Tugas9">
            <Tugas9 />
          </Route>
          <Route exact path="/Tugas-10/Table">
            <Table />
          </Route>
          <Route exact path="/Tugas-11/Timer">
            <Timer />
          </Route>
          <Route exact path="/Tugas-12/Form">
            <Form />
          </Route>
          <Route exact path="/Tugas-13/Axios">
            <Axios />
          </Route>
          <Route exact path="/Tugas-14/DataHargaBuah">
            <DataHargaBuah />
          </Route>
        </Switch>
            </div>
        </Router>
    )
}
export default Nav