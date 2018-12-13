import { Button, Grid, TextField, withStyles } from '@material-ui/core';
import { Print as PrintIcon } from '@material-ui/icons';
import { DropzoneArea } from 'material-ui-dropzone';
import React from 'react';
import { Field, Form } from 'react-final-form';
import AutoSave, { loadProfile } from './AutoSave';
import ImagePreview from './ImagePreview';

const required = value => !value && 'Bitte ausfüllen';

function SteckbriefForm({ onSubmit, className = '', classes }) {
  const initialValues = loadProfile();

  return (
    <Form onSubmit={onSubmit} initialValues={initialValues}>
      {({ handleSubmit, reset, invalid }) => (
        <form onSubmit={handleSubmit} className={className}>
          <AutoSave />
          <Grid container spacing={24}>
            <Grid item xs={12} md={8}>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Field name="name" validate={required}>
                    {({ input, meta }) => (
                      <TextField
                        id={input.name}
                        label="Wie heißt du?"
                        autoComplete="name"
                        error={meta.touched && meta.invalid}
                        helperText={meta.touched && meta.error}
                        fullWidth
                        required
                        {...input}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="company">
                    {({ input, meta }) => (
                      <TextField
                        id={input.name}
                        label="In welcher Firma arbeitest du?"
                        placeholder="Freiberufler lassen dieses Feld einfach leer"
                        autoComplete="organization"
                        error={meta.touched && meta.invalid}
                        helperText={meta.touched && meta.error}
                        fullWidth
                        {...input}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="job" validate={required}>
                    {({ input, meta }) => (
                      <TextField
                        id={input.name}
                        label="Was machst du so beruflich?"
                        placeholder="z.B. Software-Ingenieur, Werbe-Texterin"
                        autoComplete="organization-title"
                        error={meta.touched && meta.invalid}
                        helperText={meta.touched && meta.error}
                        fullWidth
                        required
                        {...input}
                      />
                    )}
                  </Field>
                </Grid>
                <Grid item xs={12}>
                  <Field name="hobbies" validate={required}>
                    {({ input, meta }) => (
                      <TextField
                        id={input.name}
                        label="Was machst du privat so?"
                        error={meta.touched && meta.invalid}
                        helperText={meta.touched && meta.error}
                        fullWidth
                        required
                        {...input}
                      />
                    )}
                  </Field>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Field name="photo">
                {({ input }) =>
                  input.value && input.value.length ? (
                    <ImagePreview file={input.value[0]} onRemove={() => input.onChange([])} />
                  ) : (
                    <div className={classes.dropzone}>
                      <DropzoneArea acceptedFiles={['image/*']} filesLimit={1} showPreviewsInDropzone={false} {...input} />
                    </div>
                  )
                }
              </Field>
            </Grid>
          </Grid>
          <div className={classes.sectionHeader}>Kontakt</div>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4}>
              <Field name="email">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="email"
                    label="E-Mail"
                    autoComplete="email"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={4}>
              <Field name="phone">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="tel"
                    autoComplete="tel"
                    label="Telefon"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={4}>
              <Field name="homepage">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="url"
                    autoComplete="url"
                    label="Homepage"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
          <div className={classes.sectionHeader}>Links zu Online-Profilen</div>
          <Grid container spacing={24}>
            <Grid item xs={12} md={4}>
              <Field name="profiles.xing">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="url"
                    label="XING"
                    placeholder="https://www.xing.com/profile/Dein_Name/"
                    pattern="https://www\.xing\.com/profile/.*"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={4}>
              <Field name="profiles.linkedin">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="url"
                    label="LinkedIn"
                    placeholder="https://www.linkedin.com/in/deinname/"
                    pattern="https://www.linkedin.com/in/.*"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={4}>
              <Field name="profiles.twitter">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    type="url"
                    label="Twitter"
                    placeholder="https://twitter.com/deinname/"
                    pattern="https://twitter.com/.*"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    fullWidth
                    {...input}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
          <div className={classes.sectionHeader}>Interessen</div>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6}>
              <Field name="offering">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    label="Ich biete Unterstützung zu diesen Themen"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    multiline
                    fullWidth
                    rows={10}
                    {...input}
                  />
                )}
              </Field>
            </Grid>
            <Grid item xs={12} md={6}>
              <Field name="searching">
                {({ input, meta }) => (
                  <TextField
                    id={input.name}
                    label="Ich suche Leute, die sich für diese Themen interessieren"
                    error={meta.touched && meta.invalid}
                    helperText={meta.touched && meta.error}
                    multiline
                    fullWidth
                    rows={10}
                    {...input}
                  />
                )}
              </Field>
            </Grid>
          </Grid>
          <div className={classes.actions}>
            <Button type="submit" variant="contained" color="primary" disabled={invalid}>
              <PrintIcon className={classes.buttonIcon} /> Steckbrief drucken
            </Button>
            <Button type="reset" onClick={reset}>
              Zurücksetzen
            </Button>
          </div>
        </form>
      )}
    </Form>
  );
}

const styles = ({ spacing, typography }) => ({
  sectionHeader: {
    ...typography.h5,
    marginTop: spacing.unit * 4,
  },
  dropzone: {
    ...typography.body1,
  },
  actions: {
    marginTop: spacing.unit * 4,
  },
  buttonIcon: {
    marginEnd: spacing.unit,
  },
});

export default withStyles(styles)(SteckbriefForm);
