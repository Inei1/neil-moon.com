"use client";

import * as React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Container, Grid, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Container>
      <Typography variant="h1">Neil Moon</Typography>
      <Typography variant="h2">Software Engineer</Typography>
      <Typography variant="h5">
        I'm looking for a job right now! Please feel free to reach out if you have any software engineering jobs available.
      </Typography>
      <Typography fontSize={18}>
        I'm a software engineer with around three years of experience.
        My skillset includes full-stack software development, cloud (AWS, GCP), and general software development such as migrating legacy code.
      </Typography>
      <Typography>Software Engineer, Google, July 2020-Jan 2023</Typography>
      <Typography>Software Development Engineering Intern, Amazon, 2019</Typography>
      <Typography variant="h3">Contact and socials</Typography>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item>
          <MuiLink target="_blank" href="https://drive.google.com/file/d/1z-jSeRKHfAwor9qWYOEqrzLNZqcCYI3l/view?usp=sharing">
            <Grid container direction="column">
              <Grid item>
                <Image src="/resume-icon.svg" alt="resume icon" width={34} height={34} />
              </Grid>
              <Grid item>
                Resume
              </Grid>
            </Grid>
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink target="_blank" href='mailto:neil@neil-moon.com'>
            <Grid container direction="column">
              <Grid item>
                <EmailIcon fontSize="large" />
              </Grid>
              <Grid item>
                Email
              </Grid>
            </Grid>
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink href="https://www.linkedin.com/in/neil-moon/" target="_blank">
            <Grid container direction="column">
              <Grid item>
                <LinkedInIcon fontSize="large" />
              </Grid>
              <Grid item>
                LinkedIn
              </Grid>
            </Grid>
          </MuiLink>
        </Grid>
        <Grid item>
          <MuiLink href="https://github.com/Inei1" target="_blank">
            <Grid container direction="column">
              <Grid item>
                <GitHubIcon fontSize="large" />
              </Grid>
              <Grid item>
                Github
              </Grid>
            </Grid>
          </MuiLink>
        </Grid>
      </Grid>
    </Container>
  )
}
