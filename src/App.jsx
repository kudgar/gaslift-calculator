import React, {useState} from 'react';
import classes from './app.module.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';



const App = () => {
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [thickness, setThickness] = useState('');
  const [density, setDensity] = useState('');
  const [weight, setWeight] = useState('0');
  const [result, setResult] = useState('');

  const counterHandler = () => {
    const fasadeWeight = width * height * thickness * density;
    setWeight(fasadeWeight.toFixed(3) + ' кг');
   
  };

  const clearHandler = () => {
   
  };

  const onWidthChange = (event) => {
    setWidth(event.target.value)
  };

  const onHeightChange = (event) => {
    setHeight(event.target.value)
  }

  const onThicknessChange = (event) => {
    const value = event.target.value;
    setThickness(value);
  }

  const onMaterialTypeChange = (event) => {
    const value = event.target.value;
    setDensity(value)
  };

  return (
    <div className={classes.board}>

    <Typography sx={{mb: 0}} variant="h5" component="h5">
      Рассчёт усилия подъёмника
    </Typography>
    <Typography 
      sx={{ml: 2.5, mt: -0.5, color: '#666666'}} 
      variant="subtitle1" 
      display="block" 
      alignSelf="flex-start">введите размеры в милиметрах
    </Typography>

    <TextField
      sx={{width: 324}}
    // error
      id="outlined-basic"
      type="number"
      label="Ширина фасада"
      variant="outlined"
      // helperText="Incorrect entry."
      size="medium"
      margin="normal"
      value={width}
      onChange={onWidthChange}/>

      <TextField
        sx={{width: 324}}
        id="outlined-basic"
        type="number"
        label="Высота фасада"
        variant="outlined"
        size="medium"
        margin="normal"
        value={height}
        onChange={onHeightChange}
        />

      <FormControl sx={{ m: 2, width: 324 }} size="medium">
        <InputLabel id="demo-simple-select-label">Тип материала</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Тип материала"
          onChange={onMaterialTypeChange}
        >
          <MenuItem value={0.00000069}>ДСП</MenuItem>
          <MenuItem value={0.00000075}>МДФ</MenuItem>
          <MenuItem value={540}>Массив: липа, сосна, тополь, осина, кедр, ель, ольха, ива</MenuItem>
          <MenuItem value={650}>Массив: дуб, лиственница, бук, береза, ясень, яблоня, вяз, клен</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 2, width: 324 }} size="medium">
        <InputLabel id="demo-simple-select-label">Толщина материала</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Толщина материала"
          onChange={onThicknessChange}
        >
          <MenuItem value={16}>16 мм</MenuItem>
          <MenuItem value={17}>17 мм</MenuItem>
          <MenuItem value={18}>18 мм</MenuItem>
          <MenuItem value={19}>19 мм</MenuItem>
          <MenuItem value={15}>15 мм</MenuItem>
          <MenuItem value={20}>20 мм</MenuItem>
        </Select>
      </FormControl>


        <FormLabel sx={{ mt: 1}} id="demo-row-radio-buttons-group-label">Угол откытия фасада</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio size="small"/>} label="75°" />
          <FormControlLabel value="male" control={<Radio size="small"/>} label="90°" />
          <FormControlLabel value="other" control={<Radio size="small"/>} label="100°" />
        </RadioGroup>



        <FormLabel sx={{ mt: 1}} id="demo-row-radio-buttons-group-label">Количество кронштейнов</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio size="small"/>} label="1" />
          <FormControlLabel value="male" control={<Radio size="small"/>} label="2" />

        </RadioGroup>

        <FormLabel sx={{ mt: 1}} id="demo-row-radio-buttons-group-label">Масса фасада</FormLabel>
        <output className={classes.output}>{weight}</output>

        <FormLabel sx={{ mt: 1}} id="demo-row-radio-buttons-group-label">Результат</FormLabel>
        <output className={classes.output}>{result}</output>

      <Button variant="contained" sx={{mb: 1.5, mt: 1, width: 324}} onClick={counterHandler}>Считать</Button>
      <Button variant="contained" color="error" sx={{width: 324}} onClick={clearHandler}>Очистить</Button>

    </div>

  )
};

export default App;
