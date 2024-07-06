import * as React from 'react';
import Box from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Grid, Paper, styled, Typography } from '@mui/material';

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(10),
  width: '100%', // Set width to 100% to take full width
  color: theme.palette.text.primary,
}));

const Reference = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: '10%',
      }}
    >
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Week 1">
                  <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                  <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography noWrap>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Data Grid">
                  <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                  <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={8}>
          <StyledPaper sx={{ my: 1, p: 2 }}>
            <Typography>
              <SimpleTreeView>
                <TreeItem itemId="grid" label="Data Grid">
                  <TreeItem itemId="grid-community" label="@mui/x-data-grid" />
                  <TreeItem itemId="grid-pro" label="@mui/x-data-grid-pro" />
                  <TreeItem itemId="grid-premium" label="@mui/x-data-grid-premium" />
                </TreeItem>
              </SimpleTreeView>
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reference;
