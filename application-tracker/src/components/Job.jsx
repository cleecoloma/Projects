import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { styled } from "@mui/system";
import Switch from "@mui/material/Switch";
import Button from "@mui/material/Button";

function Job(props) {
    function handleClick() {
        props.removeJob(props.id)
    }

    const useStyles = styled (theme => (
        {
            clickableIcon: {
                color: "green", "&:hover" : {
                    color: "yellow",
                },
            },
        } 
    ));

    const classes = useStyles();

    return (
        <section>
            <div className="job">
                <div className="job-top">
                    <p>{props.title}</p>
                    <Switch {...props} />
                </div>
                <div>
                    <p>{props.company}</p>
                    <p>{props.location}</p>
                </div>
                <div className="job-bottom">
                    <Button variant="outlined" href={props.link}> Link </Button>
                    <div className="job-bottom-icons">
                        <FavoriteIcon />
                        <EditIcon />
                        <DeleteForeverIcon className={classes.useStyle} onClick={handleClick} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Job;