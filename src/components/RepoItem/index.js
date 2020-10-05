import React from 'react';
import moment from 'moment';
import './index.css';
import { GoGitBranch } from 'react-icons/go';




const RepoItem = ({repo}) => (
    <div className="slds-grid slds-gutters">
        
        <div className="container">
        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <img 
                className="repo-item__image shadow mr-rt-16" 
                src={repo.owner.avatar_url}
                alt={repo.owner.login}
            />
        </a>
        <div className="slds-cols">
            <h2 className="repo-item__title mr-none mr-bt-16">{repo.name}</h2>
            <div className="slds-col" id="gitext">{repo.description}</div>
            <div className="flex flex-end align-center">
                <div 
                    className="badg badg-star mr-rt-16" 
                    title="Repo Stars">
                    {repo.stargazers_count}
                </div>
                <div 
                    className="badg mr-rt-16"
                    title="Forks count">
                    {repo.forks_count}<GoGitBranch />
                                        
                </div>                
                </div>
               

                <div className="repo-item__owner">
                    {moment(repo.created_at).startOf('day').fromNow()}
                    <span> by {repo.owner.login}</span>
                </div>                
            </div>
        </div>
    </div>
);

export default RepoItem;