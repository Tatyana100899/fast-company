import React, { useState } from "react";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import User from "./user";
import PropTypes from "prop-types";
import GroupList from "./groupList";
import api from "../api";

const Users = ({ users, ...rest }) => {
    const count = users.length;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const [professions] = useState(api.professions.fetchAll());

    const handleProfessionSelect = (params) => {
        console.log(params);
    };
    console.log(professions);
    const handlePageChange = (pageIndex) => {
        console.log("page: ", pageIndex);
        setCurrentPage(pageIndex);
    };
    // console.log(users);
    const userCrop = paginate(users, currentPage, pageSize);

    return (
        <>
            <GroupList
                items={professions}
                onItemSelect={handleProfessionSelect}/>
            { count
                ? (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Профессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {userCrop.map((user) => (
                                <User
                                    key={user._id}
                                    {...rest}
                                    {...user}
                                />
                            ))}
                        </tbody>
                    </table>
                )
                : null}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </>
    );
};
Users.propTypes = {
    users: PropTypes.array.isRequired
};

export default Users;
