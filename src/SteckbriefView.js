import { Card, CardContent, CardHeader, CardMedia, Grid, withStyles, Button } from '@material-ui/core';
import {
  ArrowBack as ArrowBackIcon,
  Mood as MoodIcon,
  Contacts as ContactsIcon,
  Comment as CommentIcon,
  PriorityHigh as PriorityHighIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { getFileData } from './file';
import { QRCode } from 'react-qr-svg';

function SteckbriefView({ name, job, company, photo, phone, email, homepage, hobbies, offering, searching, profiles, onReset, classes }) {
  const [photoData, setPhotoData] = useState();

  useEffect(
    () => {
      if (photo && photo.length) {
        getFileData(photo[0])
          .then(setPhotoData)
          .then(() => window.print());
      } else {
        window.print();
      }
    },
    [photo]
  );

  return (
    <>
      <Helmet>
        <html className={classes.html} />
      </Helmet>
      <Button variant="contained" color="primary" onClick={onReset} className={classes.backButton}>
        <ArrowBackIcon /> Zurück
      </Button>
      <Grid container spacing={24}>
        <Grid item xs={6}>
          <Card>
            {photoData && <CardMedia component="img" image={photoData} alt="Profilbild" />}
            <CardContent>
              <div className={classes.name}>{name}</div>
              <div className={classes.job}>{job}</div>
              {company && <div className={classes.company}>bei {company}</div>}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} className={classes.sidebar}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Card>
                <CardHeader avatar={<CommentIcon />} title="Kontakt" />
                <CardContent className={classes.noTopPadding}>
                  {email && <div className={classes.contact}>E-Mail: {email}</div>}
                  {phone && <div className={classes.contact}>Telefon: {phone}</div>}
                </CardContent>
              </Card>
            </Grid>

            {hobbies && (
              <Grid item xs={12}>
                <Card>
                  <CardHeader avatar={<MoodIcon />} title="Privat mache ich" />
                  <CardContent className={classes.noTopPadding}>
                    <div className={classes.content}>{hobbies}</div>
                  </CardContent>
                </Card>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid item xs={6}>
          {offering && (
            <Card className={classes.fullHeight}>
              <CardHeader avatar={<PriorityHighIcon />} title="Ich biete" subheader="Unterstützung zu diesen Themen" />
              <CardContent className={classes.noTopPadding}>
                <div className={classes.content}>{offering}</div>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={6}>
          {searching && (
            <Card className={classes.fullHeight}>
              <CardHeader avatar={<SearchIcon />} title="Ich suche" subheader="Leute, die sich für diese Themen interessieren" />
              <CardContent className={classes.noTopPadding}>
                <div className={classes.content}>{searching}</div>
              </CardContent>
            </Card>
          )}
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardHeader avatar={<ContactsIcon />} title="Profile" />
            <CardContent className={classes.profiles}>
              {[
                { label: 'Homepage', url: homepage },
                { label: 'XING', url: profiles.xing },
                { label: 'LinkedIn', url: profiles.linkedin },
                { label: 'Twitter', url: profiles.twitter },
              ].map(({ label, url }) => (
                <div key={label} className={classes.profile}>
                  <QRCode level="L" value={url} className={classes.profileQr} />
                  <div className={classes.profileLabel}>{label}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

const styles = ({ spacing, typography }) => ({
  html: {
    fontSize: '10pt',
    padding: spacing.unit,
  },
  backButton: {
    position: 'absolute',
    top: spacing.unit,
    right: spacing.unit,
    '@media print': {
      display: 'none',
    },
  },
  name: {
    ...typography.h5,
  },
  job: {
    ...typography.body1,
    marginTop: spacing.unit,
  },
  company: {
    ...typography.body1,
  },
  photo: {
    width: '100%',
  },
  contact: {
    ...typography.body2,
  },
  content: {
    ...typography.body2,
    whiteSpace: 'pre-line',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  profiles: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: 0,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  profileQr: {
    width: 96,
    height: 96,
  },
  profileLabel: {
    ...typography.body2,
    marginTop: spacing.unit * 2,
  },
  noTopPadding: {
    paddingTop: 0,
  },
  fullHeight: {
    height: '100%',
  },
});

export default withStyles(styles)(SteckbriefView);
