import React, { useEffect, useState } from 'react'
import { Box, Button, Typography, Stack, TextField } from '@mui/material'

const SearchExercises = () => {
  const [search, setSearch] = useState('')

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData( )
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">

      <Typography fontWeight={700} 
        sx={{
          fontSize: { lg: '44px', xs: '30px' }
        }} 
        mb="50px" textAlign="center">
        Awesome exercises that you < br/>
        should  know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { 
              fontWeight: '700',
              border: 'none', 
              borderRadius: '4px'
          },
          width: { lg: '800px', xs: '350px' },
          backgroundColor: '#fff',
          borderRadius: '40px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exersices"
          type='text'
        />

        <Button className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '60px',
            position: 'absolute',
            right: '0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises