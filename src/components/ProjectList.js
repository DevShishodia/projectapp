import React from 'react'
import { Box } from '@mui/system';
import Stack from '@mui/material/Stack';
import ProjectBar from './ProjectBar';
import dataObj from '../data';


const ProjectList = () => {
    
    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Stack spacing={2} >
                  {dataObj.data.map((single_data, idx) => {
                    return (
                        <div className='ListItem' > <ProjectBar key={idx} name={single_data} /></div>
                    )
                  })}
                </Stack>
            </Box>
        </>
    )
}

export default ProjectList;