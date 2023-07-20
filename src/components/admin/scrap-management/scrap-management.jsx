import React, {useEffect, useState} from 'react';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';

import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';
import { MaterialCard } from '../section/material/material-card';
import { MaterialSearch } from '../section/material/material-search';
import { ThemeProvider } from '@emotion/react';
import GlobalTheme from '../../../Theme/GlobalTheme';
import AddMaterialModal from '../section/material/add-material-modal';
import axios from '../../../config/axios';



const ScrapManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrap, setScrap] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    axios.get('/scrap-management')
    .then((response)=>{
      console.log(response.data ,": scrap materials")
      setScrap(response.data)
    })
    .catch((err)=>{
      console.log(err, " : AXIOS Error");
    })
  },[])
  return (
    

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container >
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4" fontWeight={500}>
                  Scrap Materials
                </Typography>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={handleOpenModal}
                >
                  Add
                </Button>

                <AddMaterialModal
                  open={isModalOpen}
                  onClose={handleCloseModal}
                />

              </div>
            </Stack>
            <MaterialSearch />
            <Grid
              container
              spacing={3}
            >
              {scrap.map((scrap) => (
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  key={scrap.id}
                >
                  <MaterialCard scrap={scrap} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <Pagination
                count={3}
                size="small"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

  )

};


export default ScrapManagement;
