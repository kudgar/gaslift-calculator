import React, { useState } from 'react';
import classes from './app.module.css';
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
  const [density, setDensity] = useState(0); //Плотоность материала
  const [weight, setWeight] = useState(0);
  const [degree, setDegree] = useState(0);
  const [quantity, setQuantity] = useState(0)
  const [result, setResult] = useState('-');
  const [quantityText, setQuantityText] = useState('');

  const counterHandler = async () => {
    const fasadeWeight = width * height * thickness * density;
    const force = (((fasadeWeight * (height / 2)) / (quantity * degree)) * 0.15) * 10;

    setWeight(fasadeWeight.toFixed(3) + ' кг');

    if (force <= 5) {
      setResult(quantityText + '50N');
    } else if (force <= 6) {
      setResult(quantityText + '60N');
    } else if (force <= 8) {
      setResult(quantityText + '80N');
    } else if (force <= 10) {
      setResult(quantityText + '100N');
    } else if (force <= 12) {
      setResult(quantityText + '120N');
    } else if (force < 18) {
      setResult(quantityText + '150N');
    } else {
      setResult('Ошибка');
    }
  };

  const clearHandler = () => {
    setWidth('');
    setHeight('');
    setResult('');
    setWeight(0);
  };

  const onWidthChange = (event) => {
    setWidth(event.target.value)
  };

  const onHeightChange = (event) => {
    const value = event.target.value;
    setHeight(parseInt(value))
  }

  const onThicknessChange = (event) => {
    const value = event.target.value;
    setThickness(parseInt(value));
  }

  const onMaterialTypeChange = (event) => {
    const value = event.target.value;
    setDensity(value)
  };

  const onDegreeChange = (event) => {
    const value = event.target.value;
    setDegree(parseInt(value));
  };

  const onQuantityChange = (event) => {
    const value = event.target.value;
    setQuantity(parseInt(value));
    value == 1 ? setQuantityText('Один кронштейн ') : setQuantityText('Два кронштейна ')
  }

  return (
    <div className={classes.board}>

      <Typography sx={{ mb: 0 }} variant="h6" component="h6">
        Расчёт усилия подъёмника
      </Typography>
      {/* <Typography
        sx={{ ml: 2.5, mt: -0.5, color: '#666666' }}
        variant="subtitle1"
        display="block"
        alignSelf="flex-start">введите размеры в миллиметрах
      </Typography> */}

      <TextField
        sx={{ width: 324 }}
        // error
        id="outlined-basic"
        type="number"
        label="Ширина фасада, мм."
        variant="outlined"
        // helperText="Incorrect entry."
        size="small"
        margin="normal"
        value={width}
        onChange={onWidthChange} />

      <TextField
        sx={{ width: 324 }}
        id="outlined-basic"
        type="number"
        label="Высота фасада, мм."
        variant="outlined"
        size="small"
        margin="normal"
        value={height}
        onChange={onHeightChange}
      />


      {/* Тип материала */}
      <FormControl sx={{ m: 2, width: 324 }} size="small">
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
          <MenuItem value={0.00000054}>Массив: липа, сосна, тополь, осина, кедр, ель, ольха, ива</MenuItem>
          <MenuItem value={0.00000065}>Массив: дуб, лиственница, бук, береза, ясень, яблоня, вяз, клен</MenuItem>
        </Select>
      </FormControl>

      {/* Толщина материала */}
      <FormControl sx={{ m: 1, width: 324 }} size="small">
        <InputLabel id="demo-simple-select-label">Толщина материала</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          // value={age}
          label="Толщина материала"
          onChange={onThicknessChange}
        >
          <MenuItem value={15}>15 мм</MenuItem>
          <MenuItem value={16}>16 мм</MenuItem>
          <MenuItem value={17}>17 мм</MenuItem>
          <MenuItem value={18}>18 мм</MenuItem>
          <MenuItem value={19}>19 мм</MenuItem>
          <MenuItem value={20}>20 мм</MenuItem>
        </Select>
      </FormControl>
      <FormLabel sx={{ mt: 0.5 }} id="demo-row-radio-buttons-group-label">Угол откытия фасада</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onDegreeChange}
      >
        <FormControlLabel value={75} control={<Radio size="small" />} label="75°" />
        <FormControlLabel value={90} control={<Radio size="small" />} label="90°" />
        <FormControlLabel value={100} control={<Radio size="small" />} label="100°" />
      </RadioGroup>
      <FormLabel sx={{ mt: 1 }} id="demo-row-radio-buttons-group-label">Количество кронштейнов</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={onQuantityChange}
      >
        <FormControlLabel value={1} control={<Radio size="small" />} label="1" />
        <FormControlLabel value={2} control={<Radio size="small" />} label="2" />

      </RadioGroup>

      <FormLabel sx={{ mt: 1 }} id="demo-row-radio-buttons-group-label">Масса фасада</FormLabel>
      <output className={classes.output}>{weight}</output>

      <FormLabel sx={{ mt: 1 }} id="demo-row-radio-buttons-group-label">Результат</FormLabel>
      <output className={classes.output}>{result}</output>

      <Button variant="contained" sx={{ mb: 1.5, mt: 1, width: 324 }} onClick={counterHandler}>Считать</Button>
      <Button variant="contained" color="error" sx={{ width: 324 }} onClick={clearHandler}>Очистить</Button>

    </div>

  )
};

export default App;
