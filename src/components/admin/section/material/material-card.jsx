import PropTypes from 'prop-types';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Avatar, Box, Card, CardContent, CardMedia, Divider, Stack, SvgIcon, Typography, Button } from '@mui/material';

export const MaterialCard = (props) => {
  const { scrap } = props;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* <CardMedia
        sx={{ height: 150}}
        image="https://images.pexels.com/photos/276267/pexels-photo-276267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="SCRAP STOCK"
      /> */}
      <CardContent>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={companies.logo}
            variant="square"
          />
        </Box> */}
        <Typography
          align="left"
          gutterBottom
          variant="h5"
        >
         {scrap.scrap}
        </Typography>
        <Typography
          align="left"
          variant="body1"
        >
        </Typography>
        <Typography
          align="left"
          gutterBottom
          variant="caption"
        >Category:  
          {scrap.category}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <CurrencyRupeeIcon />
          </SvgIcon>
          <Typography
            color="text.secondary"
            display="inline"
            variant="body2"
          >
            {scrap.price} /kg
          </Typography>
        </Stack>
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <SvgIcon
            color="action"
            fontSize="small"
          >
            <EditIcon />
          </SvgIcon>
          <Button variant='outlined'>Edit</Button>
        </Stack>
      </Stack>
    </Card>
  );
};


