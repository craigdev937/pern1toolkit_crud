import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Players } from "../components/Players";
import { Add } from "../containers/Add";
import { Edit } from "../containers/Edit";

export const Main = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Routes>
                <Route path="*" element={<Navigate to="/players" />} />
                <Route path="/players" element={<Players />} />
                <Route path="/players/add" element={<Add />} />
                <Route path="/players/edit/:id" element={<Edit />} />
            </Routes>
        </React.Fragment>
    </BrowserRouter>
);


