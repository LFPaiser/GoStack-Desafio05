import { getCustomRepository, TransactionRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async run(id: string): Promise<void> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exist (thus cannot be deleted)');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
