import { FormControlLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import React from 'react';

const CheckboxProton = ({changedParam, param}) => {
    // const classes = useStyles();
    const {checked, label, id} = param;
    return (
        <div>
            <FormControlLabel

                control={
                    <Checkbox 
                        size='small'
                        checked= {checked}
                        onChange= {() => changedParam(id)}
                        inputProps={{'area-label': 'checkbox with small size'}}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default CheckboxProton;
