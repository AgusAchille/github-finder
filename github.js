class GitHub{
    constructor() {
        this.config = {
            headers: {
              Authorization: 'token e009b077d868fcf39f32f978cf1cec34a7b9e239'
            }
        };

        this.repos_count = 5;
        this.repos_sort = 'created: desc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

        const profile = await profileResponse.json();
        
        let repos
        
        if (profileResponse.status === 200) {
            const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config);
            
            repos = await reposResponse.json();
        }

        return {
            profile, // this is the same as profile: profile
            repos
        }
    }
}