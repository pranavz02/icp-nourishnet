import React, { useState } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { FaCheckCircle, FaMoneyBillAlt, FaUserFriends, FaClipboardList, FaCalendarAlt,FaTrophy } from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import Header from "../../components/Header";

const PremiumFeatures = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const features = [
    {
      icon: FaClipboardList,
      text: "Food donation platform",
    },
    {
      icon: FaUserFriends,
      text: "Connection with NGOs",
    },
    {
      icon: FaMoneyBillAlt,
      text: "Limited visibility",
    },
    {
      icon: FaCalendarAlt,
      text: "Basic analytics",
    },
  ];

  const premiumFeatures = [
    {
      icon: FaMoneyBillAlt,
      text: "Enhanced visibility",
    },
    {
      icon: FaUserFriends,
      text: "Dedicated support",
    },
 
    {
      icon: FaCalendarAlt,
      text: "Advanced analytics and reports",
    },
    {
      icon: FaClipboardList,
      text: "Customized donation reports",
    },
  
    // Add more premium features
  ];

  return (
    <Box m="20px">
      <Header title="Premium Features" subtitle="Explore our premium offerings" />
      <Box display="flex" justifyContent="center" alignItems="stretch" mt={4}>
        {/* First Card */}
        <Card
          sx={{
            width: 400,
            height: "100%",
            margin: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
          onMouseEnter={() => handleCardHover(0)}
          onMouseLeave={handleCardLeave}
        >
          <CardContent>
            <Typography variant="h6" style={{ color: "green", marginBottom: "8px", fontSize: "20px" }}>FREE</Typography>
            <Typography variant="h5" style={{ color: "red", fontSize: "28px", marginBottom: "12px", textAlign: "left" }}>Free Services</Typography>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", textAlign: "left" }}>
              {features.map((feature, index) => (
                <li key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                  <FaCheckCircle style={{ fontSize: "18px", marginRight: "8px" }} />
                  <Typography variant="body1" style={{ fontSize: "16px" }}>{feature.text}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            style={{
              transform: `translateY(${hoveredCard === 0 ? 0 : 100}px)`,
              transition: "transform 0.5s, opacity 0.5s",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <FiArrowRightCircle style={{ fontSize: "24px", marginRight: "8px", transition: "transform 0.3s" }} />
              <Typography variant="body2" style={{ fontSize: "16px", opacity: hoveredCard === 0 ? 1 : 0, transition: "opacity 0.3s" }}>
                Continue with Free
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Second Card */}
        <Card
          sx={{
            width: 400,
            height: "100%",
            margin: "0 20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.5s, box-shadow 0.5s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
          onMouseEnter={() => handleCardHover(1)}
          onMouseLeave={handleCardLeave}
        >
          <CardContent>
            <Typography variant="h6" style={{ color: "orange", marginBottom: "8px", fontSize: "20px" }}>$50</Typography>
            <Typography variant="h5" style={{ color: "yellow", fontSize: "28px", marginBottom: "12px", textAlign: "left" }}>Premium Services</Typography>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "12px", textAlign: "left" }}>
              {premiumFeatures.map((feature, index) => (
                <li key={index} style={{ marginBottom: "8px", display: "flex", alignItems: "center" }}>
                  <FaCheckCircle style={{ fontSize: "18px", marginRight: "8px" }} />
                  <Typography variant="body1" style={{ fontSize: "16px" }}>{feature.text}</Typography>
                </li>
              ))}
            </ul>
          </CardContent>
          <Box
            p={2}
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            justifyContent="flex-end"
            style={{
              transform: `translateY(${hoveredCard === 1 ? 0 : 100}px)`,
              transition: "transform 0.3s",
            }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <FiArrowRightCircle style={{ fontSize: "24px", marginRight: "8px", transition: "transform 0.3s" }} />
              <Typography variant="body2" style={{ fontSize: "16px", opacity: hoveredCard === 1 ? 1 : 0, transition: "opacity 0.3s" }}>
                Continue with Premium
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default PremiumFeatures;
