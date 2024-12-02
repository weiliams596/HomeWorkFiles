let oMemberOfTheFootballTeam = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    position: "Forward",
    team_history: ["Manchester United", "Liverpool", "Chelsea", "Arsenal", "Tottenham Hotspur"],
    goals: 0,
    goal_add:function(numGoals){
        this.goals += numGoals;
    },
    show_details: function(){
        console.log(`Name: ${this.first_name} ${this.last_name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Position: ${this.position}`);
        console.log(`Team history: ${this.team_history.join(", ")}`);
        console.log(`Goals: ${this.goals}`);
    },
    show_details_string: function(){
        return `Name: ${this.first_name} ${this.last_name}
        Age: ${this.age}\nPosition: ${this.position}
        Team history: ${this.team_history.join(", ")}\nGoals: ${this.goals}`;
    },
    get_now_team: function(){
        console.log(this.team_history[this.team_history.length-1]);
    },
    get_now_team_string: function(){
        return this.team_history.team_history[this.team_history.length-1];
    },
    get_member_name: function(){
        console.log(`${this.first_name} · ${this.last_name}`);
    },
    get_member_name_string: function(){
        return `${this.first_name} · ${this.last_name}`;
    }
}

