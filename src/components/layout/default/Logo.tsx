import * as React from "react";
import styled, { withTheme } from "@config/styled";
import { Theme } from "@config/themes";

const LOGO_DIMENSION = 75;

const StyledSvg = styled.svg`
  width: ${LOGO_DIMENSION}px;
  height: ${LOGO_DIMENSION}px;
  margin: 0;
  display: block;
`;

interface LogoProps {
  theme: Theme;
}

const LogoComponent: React.FunctionComponent<LogoProps> = ({ theme }) => (
  <StyledSvg
    width="21.515mm"
    height="21.515mm"
    version="1.1"
    viewBox="0 0 21.515196 21.515196"
  >
    <path
      strokeWidth="0.99997836"
      fill={theme.accentColor}
      d="M 40.660156,0.08789062 A 40.659787,40.659787 0 0 0 0,40.748047 40.659787,40.659787 0 0 0 40.660156,81.40625 40.659787,40.659787 0 0 0 81.320312,40.748047 40.659787,40.659787 0 0 0 40.660156,0.08789062 Z M 39.056641,26.337891 h 3.298828 c 0.426649,0 0.780557,0.07406 1.060547,0.220703 0.266655,0.133315 0.546522,0.365892 0.839843,0.699218 l 9.539063,10.798829 c 0.266656,0.306693 0.554673,0.526866 0.861328,0.660156 0.293321,0.119936 0.692573,0.179687 1.199219,0.179687 h 1.460937 V 26.337891 h 3.859375 V 54.996094 H 57.316406 V 41.876953 h -1.761718 c -0.319998,0 -0.585514,0.02048 -0.798829,0.06055 -0.226651,0.02646 -0.420079,0.08003 -0.580078,0.160156 -0.173335,0.08013 -0.319467,0.178892 -0.439453,0.298828 -0.13332,0.106658 -0.273252,0.240392 -0.419922,0.400391 l -9.90039,11.378906 c -0.106658,0.120188 -0.213656,0.235215 -0.320313,0.341797 -0.106682,0.106834 -0.219857,0.193247 -0.339844,0.259766 -0.133325,0.06652 -0.285656,0.120093 -0.458984,0.160156 -0.173328,0.04006 -0.387303,0.05859 -0.640625,0.05859 H 38.296875 L 49.695312,41.417969 c 0.306653,-0.36011 0.60087,-0.660519 0.88086,-0.900391 0.279987,-0.240048 0.60715,-0.42108 0.980469,-0.541016 -0.27998,-0.133239 -0.541253,-0.306115 -0.78125,-0.519531 -0.253325,-0.213314 -0.518841,-0.472654 -0.798829,-0.779297 z m -18.91211,0.160156 h 8.458985 c 1.813259,0 3.387424,0.21397 4.720703,0.640625 1.346613,0.4133 2.459879,1.005987 3.339843,1.779297 0.879965,0.773309 1.532336,1.705546 1.958985,2.798828 0.439981,1.093281 0.660156,2.313548 0.660156,3.660156 0,1.333279 -0.232572,2.553521 -0.699219,3.660156 -0.466649,1.106611 -1.153917,2.059408 -2.060546,2.859375 -0.893296,0.799968 -2.006565,1.427547 -3.339844,1.88086 -1.333279,0.439983 -2.860147,0.660156 -4.580078,0.660156 h -4.59961 v 10.71875 h -3.859375 z m 3.859375,3.060547 v 11.798828 h 4.59961 c 1.106623,0 2.079957,-0.146139 2.919922,-0.439453 0.853298,-0.293314 1.567313,-0.700721 2.140624,-1.220703 0.573309,-0.533312 1.005507,-1.167094 1.298829,-1.900391 0.293321,-0.733322 0.441406,-1.539955 0.441406,-2.419922 0,-1.826579 -0.567886,-3.25266 -1.701172,-4.279297 -1.119955,-1.026611 -2.819701,-1.539062 -5.099609,-1.539062 z"
      transform="scale(0.26458574)"
    />
  </StyledSvg>
);

export const Logo = withTheme(LogoComponent);
