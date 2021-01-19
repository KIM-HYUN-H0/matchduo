import Link from "next/link";
import React, { useState, useEffect } from "react";
import {makeStyles} from '@material-ui/core';
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
    root: {
        marginTop: '500px',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        zIndex: 1,
        textAlign : 'center'
    },
    tabs : {
        width : '100%',
        display : 'inline-block',
        maxWidth : '1024px',
    }
})

const Index = () => {

    const classes = useStyles();

    return (
        <>
        <Paper elevation={2} className={classes.root}>
                <Tabs variant="fullWidth" className={classes.tabs}>
                    <Link href="/main">
                    <Tab
                        // component={Link}
                        // href="/board/0"
                        icon={<MenuBookIcon />}
                        label="Main"
                    />
                    </Link>
                    <Link href="/search">
                    <Tab
                        // component={Link}
                        // href="/search"
                        icon={<SearchIcon />}
                        label="Search"
                    />
                    </Link>
                </Tabs>
            </Paper>

<Link href="/main">go main</Link>
        hi this is index
        </>
    )
}

export default Index;