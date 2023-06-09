<template>
  <div>
    <!-- Search form and results -->
    <form @submit.prevent="performSearch">
      <input type="text" v-model="searchQuery" placeholder="Enter a movie title">
      <button type="submit">Search</button>
    </form>

    <!-- Display the search results -->
    <ul>
      <li v-for="result in searchResults" :key="result.id">{{ result.title }}</li>
    </ul>

    <!-- Button to navigate to the search history page -->
    <button @click="navigateToHistory">View Search History</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';
export default {
  data() {
    return {
      searchQuery: '', // Holds the current search query
      searchResults: [], // Holds the search results
      searchHistory: [], // Holds the search history data
    };
  },
  methods: {
    performSearch() {
      // Perform the search using the searchQuery
      // ...
      
      // Save the search query and results to the searchHistory array
      const searchItem = {
        query: this.searchQuery,
        results: this.searchResults,
      };
      this.searchHistory.push(searchItem);

      // Clear the searchQuery and searchResults
      this.searchQuery = '';
      this.searchResults = [];
    },
    navigateToHistory() {
      // Navigate to the search history page and pass the search history data
      this.$router.push({
        path: '/history',
        query: { searchHistory: JSON.stringify(this.searchHistory) },
      });
    },
  },
};
</script>
