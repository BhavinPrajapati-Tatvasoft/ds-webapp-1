const userTypeService = {
  getDefaultRole: (): string => {
    const userType = localStorage.getItem("user-type");
    if (!userType) {
      localStorage.setItem("user-type", "jobSeeker");
    }
    return userType || "jobSeeker";
  },
  setDefaultRole: (userType: string): void => {
    localStorage.setItem("user-type", userType);
  },
};

export default userTypeService;
