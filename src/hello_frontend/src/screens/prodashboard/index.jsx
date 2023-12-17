import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { stats } from "../../constants";
import { revenueGenerated } from "../../constants";
import { campaign } from "../../constants";
import {
  DownloadOutlined as DownloadOutlinedIcon,
  Email as EmailIcon,
  PointOfSale as PointOfSaleIcon,
  PersonAdd as PersonAddIcon,
  Traffic as TrafficIcon,
} from "@mui/icons-material";
import {FoodBankIcon as FoodBankIcon} from '@mui/icons-material/FoodBank';
import React from "react";

const ProDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "EmailIcon":
        return (
          <EmailIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "PointOfSaleIcon":
        return (
          <PointOfSaleIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "PersonAddIcon":
        return (
          <PersonAddIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "TrafficIcon":
        return (
          <TrafficIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
      case "DownloadOutlinedIcon":
        return (
          <DownloadOutlinedIcon
            sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
          />
        );
        // case "Food":
        // return (
        //   <FoodBankIcon
        //     sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        //   />
        // );
      default:
        return null;
    }
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        {stats.map((stat, index) => (
          <Box
            key={index}
            gridColumn="span 3"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <StatBox
              title={stat.title}
              subtitle={stat.subtitle}
              progress={stat.progress}
              increase={stat.increase}
              icon={renderIcon(stat.icon)}
            />
          </Box>
        ))}

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {revenueGenerated.title}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                {revenueGenerated.amount}
              </Typography>
            </Box>
            <Box>
              <IconButton>{renderIcon(revenueGenerated.icon)}</IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isProDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Collaborations
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            {campaign.title}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {campaign.amount}
            </Typography>
            <Typography>{campaign.subtitle}</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Food Categories 
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isProDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
           Hunger Zones Cured
          </Typography>
          <Box height="200px">
            <GeographyChart isProDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProDashboard;
