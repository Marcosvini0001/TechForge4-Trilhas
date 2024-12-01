/* FIZ PELO TYPESCRIPT PLAYGROUND */


abstract class VoteSystem {
    protected votes: Record<string, number> = {};

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}


class Election extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        return this.votes; 
    }
}


class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        this.votes[candidate] = (this.votes[candidate] || 0) + 1;
    }

    getResults(): object {
        
        return Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1]) 
            .map(([candidate, votes]) => ({ candidate, votes })); 
    }
}

const election = new Election();
election.voteFor("Alice");
election.voteFor("Bob");
election.voteFor("Alice");
console.log("Resultados da Eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Carla");
poll.voteFor("David");
poll.voteFor("Carla");
poll.voteFor("Eve");
console.log("Resultados da Enquete:", poll.getResults());
