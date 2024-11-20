import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://zujlauvjdeifelfnveoq.supabase.co/rest/v1/posts?select=*',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1amxhdXZqZGVpZmVsZm52ZW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2ODgzNjksImV4cCI6MjA0NzI2NDM2OX0.ts4HoFc0htXfFmeUEH33erimqtejyD-THVMtyxyL0HU",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1amxhdXZqZGVpZmVsZm52ZW9xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2ODgzNjksImV4cCI6MjA0NzI2NDM2OX0.ts4HoFc0htXfFmeUEH33erimqtejyD-THVMtyxyL0HU"
    }
})