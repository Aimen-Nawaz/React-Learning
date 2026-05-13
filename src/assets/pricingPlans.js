const pricingPlans = [
    {
      title: "Basic Plan",
      tag: "Package",
      price: "$40.00",
      featuresList: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery",
      ],
      active: false,
    },

    {
      title: "Standard Plan",
      tag: "Package",
      price: "$80.00",
      featuresList: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery",
        "Permits and Inspection Fees",
      ],
      active: false,
    },

    {
      title: "Premium Plan",
      tag: "Promo",
      price: "$120.00",
      featuresList: [
        "Initial Consultation",
        "Labor Costs",
        "Materials and Plants",
        "Equipment and Machinery",
        "Permits and Inspection Fees",
        "Maintenance Packages",
      ],
      active: true,
    },
]
export default pricingPlans;