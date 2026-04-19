// BEGIN
const getDomainInfo = (domain) => {
  const schemes = {
    'https://': 'https',
    'http://': 'http',
  };
  
  for (const [prefix, schemeName] of Object.entries(schemes)) {
    if (domain.startsWith(prefix)) {
      return {
        scheme: schemeName,
        name: domain.replace(prefix, ''),
      };
    }
  }
  return {
    scheme: 'http',
    name: domain,
  };
};

export default getDomainInfo;
// END