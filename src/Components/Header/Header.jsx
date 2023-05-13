import React from 'react';
import './header.css'
import { TextField, FormControl } from '@mui/material';


export default function Header({ handleChange }) {
    return (
        <>
            <div className='banner'>
                <h1 className='title'>HSE Observation Form</h1>
                <form>
                    <center>
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Project"
                                type="text"
                                variant="outlined" name='Project' onChange={handleChange}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Project Details"
                                type="text"
                                variant="outlined" name='Project Details' onChange={handleChange}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Location"
                                type="text"
                                variant="outlined" name='Location' onChange={handleChange}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                                style={{ marginBottom: '20px', marginTop: "20px" }}
                                label="Date"
                                type="date"
                                variant="outlined" name='Date' onChange={handleChange}
                            />
                        </FormControl><br />
                        <FormControl>
                            <TextField
                               style={{ marginBottom: '20px', marginTop: "20px", display: 'none' }}
                                label="iTransId"
                                type="number"
                                value={0}
                                variant="outlined" name='iTransId' onChange={handleChange}
                                inputProps={{ style: { display: 'none' } }}
                            />
                        </FormControl><br />

                        

                    </center>
                </form>
            </div>
        </>
    )
}
