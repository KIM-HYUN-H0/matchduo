import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import Router from "next/router";

const top100Films = [
  { title: "롤", idx: 20 },
  { title: "리그 오브 레전드", idx: 20 },
  { title: "lol", idx: 20 },
  { title: "피파온라인4", idx: 19 },
  { title: "피파", idx: 19 },
  { title: "메이플스토리", idx: 18 },
  { title: "던파", idx: 17 },
  { title: "던전앤파이터", idx: 17 },
];

const useStyles = makeStyles({
  acWrapper: {
      display : 'flex',
      alignItems : 'center',
    //   border : '1px solid gray'
  },
  ac : {
      margin : 'auto',
    //   width : '100%',
  },
  buttonWrapper : {
      display : 'block',
      textAlign : 'center'
  }
});

const Main = () => {
  const [game, setGame] = useState();
  const [list, setList] = useState(top100Films);

  useEffect(() => {
    //처음에 게임리스트를 불러오기 위한 라이프사이클. 불러와서 list 에 저장.
  }, []);

  const test = (e, v) => {
    if (v !== null) {
      setGame(v.idx);
    }
    else {
        setGame(null);
    }
  };

  const join = () => {
      if(game) {
        Router.push(`/game?idx=${game}`)
      }
  }
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} className={classes.acWrapper}>
        <Autocomplete
        className={classes.ac}
          id="gamesearch"
          options={list}
          getOptionLabel={(option) => option.title}
          onChange={test}
          style={{ width: 500 }}
          renderInput={(params) => (
            <TextField {...params} label="게임 찾기" variant="outlined" />
          )}
        />
      </Paper>

      <div className={classes.buttonWrapper}><Button variant="outlined" onClick={join}>모여라</Button>
      </div>
    </>
  );
};

export default Main;
